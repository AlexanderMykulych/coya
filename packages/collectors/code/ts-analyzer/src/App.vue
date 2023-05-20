<template>
  <main font-sans p="x-4 y-10" text="center gray-700 dark:gray-200">
    <div flex="~ row" mb-5>
      <router-link to="morph" btn mx-2>morph</router-link>
      <router-link to="vue-compiler" btn>vue-compiler</router-link>
    </div>
   <router-view />
  </main>
</template>

<style>
.router-link-active {
  background-color: orange;
}
</style>