<script setup lang="ts">

const emit = defineEmits(['select-config']);

const diagramModules = import.meta.globEager('./../diagrams/*.coya.json');
const diagrams = Object.entries(diagramModules)
    .map(([_, val]) => val.default);

</script>

<template>
    <div class="max-w-2xl mx-auto">
        <div
            v-if="!activeConfig"
            class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
        >
            <div class="flex justify-between items-center mb-4">
                <h3
                    class="text-xl font-bold leading-none text-gray-900 dark:text-white"
                >
                    Demo (view only)
                </h3>
            </div>
            <div class="flow-root">
                <ul
                    role="list"
                    class="divide-y divide-gray-200 dark:divide-gray-700"
                >
                    <li class="py-3 sm:py-4" v-for="diagram in diagrams">
                        <div class="flex items-center space-x-4">
                            <div class="flex-shrink-0">
                                <ph:folder-fill />
                            </div>
                            <div class="flex-1 min-w-0 text-left">
                                <p
                                    class="text-sm font-medium text-gray-900 truncate dark:text-white"
                                >
                                    {{diagram.name}}
                                </p>
                            </div>
                            <div
                                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
                            >
                                <a
                                    @click="emit('select-config', diagram)"
                                    href="#"
                                    class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                                >
                                    <mdi:arrow-right-thin />
                                </a>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>