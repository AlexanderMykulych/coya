<script lang="ts" setup></script>

<template>
  <main
    class="h-full w-full px-4 text-center text-gray-700 dark:text-gray-200"
    flex="~ col"
    justify-between
  >
    <div h-full flex="~ col">
      <MainMenu />
      <router-view />
    </div>
    <Footer class="pb-5" />
  </main>
</template>
