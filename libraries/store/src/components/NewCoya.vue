<script lang="ts" setup>
defineProps<{
    modelValue: { name: string };
}>();
const emit = defineEmits(['update:modelValue', 'create', 'update:open']);

const updateName = (name: string) => {
    emit('update:modelValue', {
        name,
    });
};

const target = ref(null);
onClickOutside(target, () => emit('update:open', false));
</script>

<template>
    <Teleport to="body">
        <div
            class="flex items-center justify-center h-screen w-screen bg-gray-100/80 absolute inset-0"
        >
            <div
                ref="target"
                class="bg-white py-6 rounded-md px-10 max-w-lg shadow-md"
            >
                <h1 class="text-center text-lg font-bold text-gray-500">
                    New Coya
                </h1>
                <div class="space-y-4 mt-6">
                    <div class="w-full">
                        <input
                            type="text"
                            placeholder="name"
                            class="px-4 py-2 bg-gray-50"
                            :value="modelValue.name"
                            @input="updateName($event.target.value)"
                        />
                    </div>
                </div>
                <button
                    @click="emit('create')"
                    class="w-full mt-5 bg-indigo-600 text-white py-2 rounded-md font-semibold tracking-tight"
                >
                    Create
                </button>
            </div>
        </div>
    </Teleport>
</template>
