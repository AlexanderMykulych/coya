<script setup lang="ts">
import { ref } from "vue";

const config = ref(JSON.stringify({
    "blocks": {
        "clients": {
            "mobile": "Mobile client",
            "web": {
                "label": "Controller (Web client)"
            },
            "Desktop": {
                "label": "Desktop client"
            }
        }
    }
}));
</script>
<template>
    <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
        <textarea
            v-model="config"
            class="resize border rounded-md"
            name="config"
            id
            cols="30"
            rows="10"
        ></textarea>
        <Coya :config="config" />
    </main>
</template>
