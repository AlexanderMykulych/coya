<template>
  <div class="main-layout">
    <slot name="popup"></slot>
    <slot name="nav-bar">
      <NavBar
        :notifications="stat.notifications"
        :hideNotifications="hideNotifications"
        :hideProfile="hideProfile"
      />
    </slot>
    <slot name="notification"></slot>
    <div class="main-container" :class="{ 'main-container_full': fillContainer }">
      <slot name="content"></slot>
    </div>
    <slot v-if="!hideTabBar" name="tab-bar">
      <TabBar :stats="stat.sidebar" />
    </slot>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import NavBar from '@/mobile/layouts/partials/NavBar/NavBar.vue'
import { TabBar } from '@/mobile/layouts/partials/TabBar'
import { apiMy } from '@/shared/api'
import { AppStateService } from '@/shared/services'

export default Vue.extend({
  components: {
    NavBar,
    TabBar,
  },
  props: {
    fillContainer: {
      default: false,
      type: Boolean,
    },
    hideTabBar: {
      default: false,
      type: Boolean,
    },
    hideNotifications: {
      default: false,
      type: Boolean,
    },
    hideProfile: {
      default: false,
      type: Boolean,
    },
  },
  data() {
    return {
      stat: {},
    }
  },
  created() {
    if (!AppStateService.isTU) {
      this.getStat()
    }
  },
  methods: {
    getStat() {
      apiMy.getMyStat().then((resp) => {
        this.stat = resp.counters || {}
      })
    },
  },
})
</script>

<style scoped lang="scss">
.main-layout {
  display: flex;
  flex-direction: column;
}

.dark .main-container {
  background: #495562;
}

.main-container {
  width: 100vw;
  height: auto;
  min-height: calc(100vh - 48px - 49px);
  margin: 48px 0 49px;
  padding: 10px 4px;
  font-size: 12px;

  &_full {
    padding: 0;
  }
}

.s-p-0 .main-container {
  padding: 0;
}

.short .main-container {
  margin: 45px 0 0;
}
</style>
