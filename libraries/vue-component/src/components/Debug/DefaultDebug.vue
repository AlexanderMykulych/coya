<script setup lang="ts">
import gear from '/src/assets/gear.svg';

</script>

<template>
  <div class="def-debug">
    <img :src="gear" class="debug-img">
    <p>Select node</p>
  </div>
</template>

<style scoped>
.def-debug {
    margin-top: 200px;
}
.debug-img {
    width: 75px;
    margin: auto;
    padding-bottom: 20px;
}
</style>
