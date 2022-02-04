<script lang="ts" setup>
import { useCoyaStore } from '../stores/useCoyaStore';

const store = useCoyaStore();
</script>

<template>
  <div class="max-w-2xl mx-auto">
    <div
      class="p-4 max-w-md bg-white rounded-lg border shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700"
    >
      <div class="flex justify-between items-center mb-4">
        <h3
          class="text-xl font-bold leading-none text-gray-900 dark:text-white"
        >
          Folders
        </h3>
        <a
          href="#"
          class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
          @click="store.openFolder"
        >
          Open
        </a>
      </div>
      <div class="flow-root">
        <ul
          role="list"
          class="divide-y divide-gray-200 dark:divide-gray-700"
        >
          <li v-for="project in store.projects" :key="project.name" class="py-3 sm:py-4">
            <div class="flex items-center space-x-4">
              <div class="flex-shrink-0">
                <ph:folder-fill />
              </div>
              <div class="flex-1 min-w-0">
                <p
                  class="text-sm font-medium text-gray-900 truncate dark:text-white"
                >
                  {{ project.name }}
                </p>
              </div>
              <div
                class="inline-flex items-center text-base font-semibold text-gray-900 dark:text-white"
              >
                <a
                  href="#"
                  class="text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
                  @click="store.activateProject(project)"
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

  <Files />
</template>
