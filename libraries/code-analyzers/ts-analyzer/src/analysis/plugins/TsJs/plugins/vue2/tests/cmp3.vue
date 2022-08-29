<template>
  <div class="main-app-content">
    <SwitchMobile />

    <NotificationsContainerDesktop />

    <router-view />
    <ContactUs v-if="isLoggedIn && myProfile.is_premium" />
    <div v-if="isAdBlockDetected" class="overlay">
      <div class="popup">
        <h2>Adblock detected</h2>
        <a
          class="close"
          href="#"
          data-test-id="file:r-u click:is-ad-block-detected-false ×"
          @click.prevent="isAdBlockDetected = false"
        >&times;</a>
        <div class="content">
          Please, disable your AdBlock in order {{ mirrorConfig.mirror.name }} to work properly!
        </div>
      </div>
    </div>
    <BillingVerification v-if="isLoggedIn" />
    <StreamOverlay v-if="isLoggedIn" />
  </div>
</template>

<script lang="ts">
import { eventSubtypes, UserWebTracker } from '@socialtechnologies/tracking-web'
import { Component, Vue, Watch } from 'vue-property-decorator'
import { Getter } from 'vuex-class'

import { Site } from '@/common/types/api'
import { ConfirmEmailModal, ConfirmEmailModalProps } from '@/components/modal/confirmEmail'
import SwitchMobile from '@/components/switch-mobile/SwitchMobile.vue'
import { getTrackingResult } from '@/helpers/track/banner'
import { NotificationsContainerDesktop } from '@/modules/Notifications'
import BillingVerification from '@/pages/billingVerification/BillingVerification.vue'
import router from '@/router'
import { FingerprintService } from '@/service'
import BannersService from '@/service/banner/BannersService'
import { apiPushClient, apiSettings } from '@/shared/api'
import ContactUs from '@/shared/components/contactUs/ContactUs.vue'
import {
  AutoFreeCreditsModal,
  AutoFreeCreditsModalProps,
} from '@/shared/components/modal/autoFreeCredits'
import StreamOverlay from '@/shared/components/streamOverlay/StreamOverlay.vue'
import { fireIframePixels, initPingdom, initGTMScript } from '@/shared/helpers'
import {
  ConfirmEmailService,
  MirrorsService,
  AppStateService,
  CreditsService,
  HotjarService,
  SendiosService,
  ModalService,
} from '@/shared/services'
import LocalStorage, { LOCALS } from '@/shared/services/localStorage/LocalStorage'
import subscribeOnSocketEventsEngagement from '@/subscribeOnSocketEventsEngagement'

import RedirectService from './services/RedirectService'

@Component({
  router,
  components: {
    NotificationsContainerDesktop,
    SwitchMobile,
    BillingVerification,
    ContactUs,
    StreamOverlay,
  },
})
export default class RootRU extends Vue {
  @Getter('mirrorConfig') mirrorConfig: Site.MirrorConfig
  @Getter('myProfile') myProfile: Site.PersonalProfile
  @Getter('isProfileDeactivated') isProfileDeactivated: boolean
  @Getter('isLoggedIn') isLoggedIn: boolean

  isAdBlockDetected = false
  isLoading = true
  isConfirmEmailPopupShown = false

  created(): void {
    this.checkAfterRouterChange()
    this.testToAddBlockerPlugin()
    initPingdom()
    this.checkCanSendEmail()

    this.isLoading = false
    HotjarService.checkAndInitForMirror(AppStateService.siteMirror, 'desktop')
  }

  async mounted(): Promise<void> {
    await RedirectService.resolveForceRedirect()
    fireIframePixels(['email_confirm'])

    if (this.isLoggedIn) {
      await this.loggedUserInitialization()

      this.$nextTick(() => initGTMScript())
    }
  }

  checkAfterRouterChange(): void {
    let prevPage = null

    router.afterEach((to) => {
      UserWebTracker.trackEventResult([eventSubtypes.Banner.Product], getTrackingResult())

      if (this.isProfileDeactivated) {
        return
      }

      if (prevPage !== to.name && !to.meta.isPublic) {
        prevPage = to.name
      }
      BannersService.setIdGirl(to.path, to.name)

      if (!to.meta.isPreProduct) {
        SendiosService.popup()

        if (BannersService.isAllowedMirror()) {
          BannersService.requestNotificationBanner(to.name)
        }

        if (!MirrorsService.isEthnic(AppStateService.siteMirror)) {
          this.showConfirmPopupIfAvailable(to.name)
        }

        this.showAutoFreeCreditsPopupIfAvailable()
      }
    })
  }

  showAutoFreeCreditsPopupIfAvailable(): void {
    if (!this.isConfirmEmailPopupShown && CreditsService.shouldAutoFreeCreditsPopupBeShown()) {
      CreditsService.removeAutoFreeCreditsPopupStatus()
      this.$store.commit('SHOW_AUTO_FREE_CREDITS_POPUP')

      if (CreditsService.isDisabledAutoGetFreeCreditsPopup) {
        this.$store.commit('HIDE_AUTO_FREE_CREDITS_POPUP')
      } else {
        if (!MirrorsService.isEthnic(AppStateService.siteMirror)) return

        ModalService.openModal<AutoFreeCreditsModalProps>({
          component: AutoFreeCreditsModal,
          props: {
            onClose: () => {
              this.showConfirmPopupIfAvailable(this.$route.name)

              this.$store.commit('HIDE_AUTO_FREE_CREDITS_POPUP')
            },
          },
          params: {
            clickToClose: false,
          },
        })
      }
    }
  }

  showConfirmPopupIfAvailable(route: string): void {
    const shouldShowConfirmEmail = ConfirmEmailService.shouldShowConfirmEmail(this.myProfile)

    const shouldShowBlockingConfirmEmail = ConfirmEmailService.shouldShowBlockingConfirmEmail(
      this.myProfile,
      route,
    )
    const params = {
      clickToClose: true,
      width: 608,
    }

    if (shouldShowConfirmEmail || shouldShowBlockingConfirmEmail) {
      this.isConfirmEmailPopupShown = true
      this.$store.commit('SHOW_EMAIL_CONFIRM_POPUP')

      ModalService.openModal<ConfirmEmailModalProps>({
        component: ConfirmEmailModal,
        props: {
          profile: this.myProfile,
          onClose: this.onConfirmEmailClosing.bind(this),
          isClosingAvailable: !shouldShowBlockingConfirmEmail,
        },
        params,
      })
    }
  }

  /**
   * plich-10537
   */
  async checkCanSendEmail(): Promise<void> {
    const GIBRALTAR_COUNTRY_ID = 2411586

    if (
      this.myProfile.id_country === GIBRALTAR_COUNTRY_ID
      && !LocalStorage.get(LOCALS.MARKETING_LOCATION)
    ) {
      await apiSettings.notificationsSettings({
        break: 'forever',
      })
      LocalStorage.set(LOCALS.MARKETING_LOCATION, 1)
    }
  }

  testToAddBlockerPlugin(): void {
    // adBlockEnabled test
    let adBlockEnabled = false
    const testAd = document.createElement('div')

    testAd.innerHTML = '&nbsp;'
    testAd.className = 'adsbox'
    document.body.appendChild(testAd)

    window.setTimeout(() => {
      if (testAd.offsetHeight === 0) {
        adBlockEnabled = true
      }
      document.body.removeChild(testAd)
      // eslint-disable-next-line no-console
      console.log('AdBlock Enabled? ', adBlockEnabled)

      if (adBlockEnabled) {
        this.isAdBlockDetected = true
      }
    }, 100)
  }

  async loggedUserInitialization(): Promise<void> {
    apiPushClient.init()
    await CreditsService.checkFraudUser()

    subscribeOnSocketEventsEngagement()

    await FingerprintService.init()

    HotjarService.checkAndInit({
      mirror: AppStateService.siteMirror,
      mirrorType: 'desktop',
      userData: {
        id: this.myProfile.id,
        dateCreated: this.myProfile.date_created,
      },
    })
    await this.processFreeCreditsIfAvailable()
  }

  async processFreeCreditsIfAvailable(): Promise<void> {
    if (CreditsService.areFreeCreditsAvailable) {
      await CreditsService.autoGetFreeCredits()

      if (!this.$router.currentRoute.meta.isPreProduct) {
        this.showAutoFreeCreditsPopupIfAvailable()
      }
    }
  }

  private onConfirmEmailClosing(): void {
    this.isConfirmEmailPopupShown = false
    this.$store.commit('HIDE_EMAIL_CONFIRM_POPUP')
  }

  @Watch('isLoggedIn')
  async onChangeLogin(val): Promise<void> {
    if (val) {
      await this.loggedUserInitialization()
    }
  }
}
</script>

<style scoped>
.overlay {
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  visibility: visible;
  transition: opacity 500ms;
  opacity: 1;
  background: rgba(0, 0, 0, 0.7);
}

.popup {
  position: relative;
  width: 350px;
  margin: 70px auto;
  padding: 20px;
  border-radius: 5px;
  background: #fff;
}

.popup h2 {
  margin-top: 0;
  color: #333;
  font-family: Tahoma, Arial, sans-serif;
}

.popup .close {
  position: absolute;
  top: -5px;
  right: 5px;
  text-decoration: none;
  color: #333;
  font-size: 30px;
  font-weight: bold;
}

.popup .close:hover {
  color: #06d85f;
}

.popup .content {
  overflow: auto;
  max-height: 30%;
}
</style>
