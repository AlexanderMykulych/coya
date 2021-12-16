<script lang="ts" setup>
import { usePhases } from "../usePhases";
import { WidgetConfig } from "coya-json-editor";
import { computed } from "vue";

const props = defineProps<{
    config: WidgetConfig,
}>();

const { setCurrentPhase, currentPhase } = usePhases();
const isSelected = computed(() => currentPhase.value == props.config.path);

</script>

<template>
    <div class="h-full text-2xl">
        <button
            class="cursor-finger h-full "
            @click="setCurrentPhase(Number(config.path))"
        >
            <i-mdi:play-box class="text-green-600" v-if="isSelected"/>
            <i-ic:round-play-arrow class="text-gray-500" v-else/>
        </button>
    </div>
</template>
