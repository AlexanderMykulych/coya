<script setup lang="ts">
import { ref, computed } from 'vue';
import { ColorPicker } from 'vue-color-kit';
import 'vue-color-kit/dist/vue-color-kit.css';
import { WidgetConfig } from '../WidgetConfig';

const props = defineProps<{ widgetConfig: WidgetConfig }>();
const emit = defineEmits(['valueChange']);

const open = ref(false);
const prepVal = computed({
    get: () => props.widgetConfig.row.value,
    set: val => emit("valueChange", val)
});

</script>

<template>
    <div>
        <i-ic:round-rectangle class="border-2 rounded-sm" :style="{color: prepVal}" @click="open = !open" />
        <Teleport to="body">
            <div class="modal-mask" v-if="open" @click="open = false">
                <div class="modal-wrapper">
                    <div class="modal-container">
                        <ColorPicker
                            @click.stop
                            :color="prepVal"
                            @changeColor="val => prepVal = val.hex"
                        />
                    </div>
                </div>
            </div>
        </Teleport>
    </div>
</template>

<style scoped>
.modal-mask {
    position: fixed;
    z-index: 9998;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: table;
}

.modal-wrapper {
    display: table-cell;
    vertical-align: middle;
}

.modal-container {
    width: 300px;
    margin: 0px auto;
    padding: 20px 30px;
    font-family: Helvetica, Arial, sans-serif;
}
.hu-color-picker {
    box-sizing: content-box;
}
</style>