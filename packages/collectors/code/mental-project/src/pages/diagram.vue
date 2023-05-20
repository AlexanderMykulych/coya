<script setup lang="ts">
import Coya from 'coya-vue-component'
import 'coya-vue-component/dist/style.css'

const coyaConfig = ref(
  window.coyaConfig
  || {
    "name": "coya-ts-analyzer",
    "blocks": {
      "block": "Hello from coya :)"
    },
    "phases": [],
    "style": {
      "layout": {
        "type": "grid"
      },
      "blocks": {
        "block": {}
      }
    }
  }
)

</script>

<template>
  <Coya
    class="w-full h-full"
    id="diagram"
    :config="coyaConfig"
  ></Coya>
</template>
