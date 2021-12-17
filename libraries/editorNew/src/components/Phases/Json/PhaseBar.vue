<script lang="ts" setup>
import { usePhases } from "../usePhases";
import { WidgetConfig } from "coya-json-editor";
import { computed } from "vue";

const props = defineProps<{
    config: WidgetConfig,
}>();

const { setCurrentPhase, currentPhase, phaseCount } = usePhases();
const isSelected = computed(() => currentPhase.value == props.config.path);
const index = computed(() => Number(props.config.path));
</script>

<template>
    <div class="h-full text-2xl flex text-gray-500">
        <button
            class="cursor-finger h-full "
            @click="setCurrentPhase(index)"
        >
            <i-mdi:play-box class="text-green-600" v-if="isSelected"/>
            <i-ic:round-play-arrow v-else/>

        </button>
        <button>
            <i-ic:baseline-skip-previous class="cursor-finger h-full"
                @click="setCurrentPhase(index - 1)"
            />
        </button>
        <button v-if="phaseCount - 1 > index">
            <i-ic:baseline-skip-next class="cursor-finger h-full"
                @click="setCurrentPhase(index + 1)"
            />
        </button>
    </div>
</template>
