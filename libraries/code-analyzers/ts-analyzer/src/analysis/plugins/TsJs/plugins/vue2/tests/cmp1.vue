<script lang="ts">
import { fn1 } from './utils/util';

export default {
  data() {
    return {
      val: fn1(1)
    }
  }
}
</script>

<template>
  <div>
    {{val}}
  </div>
</template>