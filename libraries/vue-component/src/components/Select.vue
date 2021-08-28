<script setup="emit" lang="ts">
import { computed, defineEmits } from "vue";
import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'

const { items, modelValue } = defineProps<{ items: any[], itemText: string, modelValue: number, label: string }>()
const emit = defineEmits(["update:modelValue"]);

const selectItem = (index: number) => {
    emit("update:modelValue", index);
}

const selected = computed(() => items[modelValue]);
</script>
<template>
    <Listbox as="div" :model-value="selected" @update:model-value="selectItem">
        <ListboxLabel class="block text-sm font-medium text-gray-700">{{label}}</ListboxLabel>
        <div class="mt-1 relative">
            <ListboxButton
                class="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            >
                <span class="flex items-center">
                    <span class="ml-3 block truncate">{{ selected[itemText] }}</span>
                </span>
                <span
                    class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none"
                >
                     <carbon-campsite class="inline-block" />
                </span>
            </ListboxButton>

            <transition
                leave-active-class="transition ease-in duration-100"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
            >
                <ListboxOptions
                    class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm"
                >
                    <ListboxOption
                        as="template"
                        v-for="(item, index) in items"
                        :key="index"
                        :value="index"
                        v-slot="{ active, selected }"
                    >
                        <li
                            :class="[active ? 'text-white bg-indigo-600' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']"
                        >
                            <div class="flex items-center">
                                <span
                                    :class="[selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate']"
                                >{{ item[itemText] }}</span>
                            </div>

                            <span
                                v-if="selected"
                                :class="[active ? 'text-white' : 'text-indigo-600', 'absolute inset-y-0 right-0 flex items-center pr-4']"
                            >
                                <carbon-campsite class="inline-block" />
                            </span>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>