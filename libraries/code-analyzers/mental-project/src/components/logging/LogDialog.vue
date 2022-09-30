<script lang="ts" setup>
const { openDialog } = useLogging()
</script>

<template>
  <v-dialog v-model="openDialog">
    <v-card h-60vh w-60vw>
      <v-card-text h-full w-full>
        <LogList />
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click="openDialog = false">Close Dialog</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>