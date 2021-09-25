<script setup lang="ts">
import { Architecture, RectPositioning } from "@coya/core";
import { computed, reactive } from "vue";

const props = defineProps<{ nodeId: string, architecture: Architecture | null }>();

const block = computed(() => props.architecture?.blocks?.find(x => x.id === props.nodeId));
const style = computed(() => props.architecture?.style?.blocks?.[props.nodeId]);
const position = computed(() => props.architecture?.style?.positioning?.find(x => x.blockId === props.nodeId)?.position);
const pos = reactive<RectPositioning>({
    x: 0,
    y: 0,
    w: 100,
    h: 100
});
</script>

<template>
    <div class="max-w-sm rounded overflow-hidden shadow-lg m-4">
        <table class="table-fixed" style="width: 100%;" v-if="block">
            <tbody>
                <tr>
                    <td class="w-1/3">Name</td>
                    <td>
                        <b>{{ nodeId }}</b>
                    </td>
                </tr>
                <tr>
                    <td>Node</td>
                    <td>
                        <svg width="100" height="100" style="margin: auto;">
                            <CoyaNode
                                v-if="block && style"
                                :block="block"
                                :block-style="style"
                                :positioning="pos"
                            />
                        </svg>
                    </td>
                </tr>
                <tr>
                    <td>Position</td>
                    <td class="text-left pl-3">
                        <b>
                            x: {{ position?.x }}
                            <br />
                            y: {{ position?.y }}
                            <br />
                            w: {{ position?.w }}
                            <br />
                            h: {{ position?.h }}
                        </b>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<style scoped>
table td {
    border-width: 1px;
    border-color: black;
    border-radius: 0.24em;
}
</style>