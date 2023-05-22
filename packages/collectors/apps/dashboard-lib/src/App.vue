<script lang="ts" setup>
const drawer = ref(true)
</script>

<template>
  <v-app id="inspire">
    <v-navigation-drawer v-model="drawer">
      <v-list>
        <v-list-item
          title="Menu"
        >
        </v-list-item>
      </v-list>

      <v-divider></v-divider>

      <v-list dark nav>
          <v-list-item title="Sprints" :to="{ path: '/sprints' }" />
          <v-list-item title="Modules" :to="{ path: '/modules' }"></v-list-item>
          <v-list-item title="Item 3" value="starred"></v-list-item>
        </v-list>
    </v-navigation-drawer>

    <v-app-bar>

      <i-ph:hamburger-fill pl-2 height="3em" width="3em" @click="drawer = !drawer" />

      <v-toolbar-title>Coya dashboard</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>
