<script lang="ts" setup>
const route = useRoute()
</script>

<template>
   <v-tabs
      background-color="primary"
      :model-value="route.name"
    >
    <v-tab value="source">
      <router-link to="/source">Source code</router-link>
    </v-tab>
    <v-tab value="diagrams">
      <router-link to="/diagrams">Diagrams</router-link>
    </v-tab>
    <v-tab value="active-session">
      <router-link to="/active-session">Active Session</router-link>
    </v-tab>
  </v-tabs>
</template>