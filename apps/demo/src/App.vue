<script setup lang="ts">
const num = ref(1);
const isPositive = eagerComputed(() => num.value > 0);
const someComp = computed(() => isPositive.value ? 1 : 2, {
    onTrigger() {
        console.log("onTrigger");
    }
});
const someComp2 = controlledComputed(
    () => isPositive.value,
    () => {
        console.log("from computed")
        return isPositive.value ? 1 : 2;
    });
</script>

<template>
    {{num}} - {{someComp}} - {{someComp2}} - {{isPositive}}
    <button @click="num++">add</button>
    <br/>
    <button @click="num--">dec</button>
</template>