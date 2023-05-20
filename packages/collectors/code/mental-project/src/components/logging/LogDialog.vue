<script lang="ts" setup>
const { openDialog } = useLogging()
</script>

<template>
  <v-dialog v-model="openDialog" :scrim="false" :absolute="true" right="0px">
    <v-card h-60vh w-60vw>
      <v-card-text h-full w-full>
        <Logs />
      </v-card-text>
    </v-card>
  </v-dialog>
</template>