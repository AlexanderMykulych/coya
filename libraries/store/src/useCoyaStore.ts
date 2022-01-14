import { asyncComputed } from "@vueuse/core";
import { acceptHMRUpdate, defineStore } from "pinia";
import { computed, ref } from "vue";
import { ErrorCodes } from "../../../common/temp/node_modules/.pnpm/@vue+compiler-core@3.2.26/node_modules/@vue/compiler-core/dist/compiler-core";
import { dirFiles } from "./dirFiles";

export const useCoyaStore = defineStore('coya', () => {
    const projects = ref<FileSystemDirectoryHandle[]>([]);
    const activeProject = ref<FileSystemDirectoryHandle | undefined>();

    const openFolder = async () => {
        const dirHandle = await window.showDirectoryPicker();
        if (await verifyPermission(dirHandle)) {
            const checksProm = projects.value.map(x => x.isSameEntry(dirHandle));
            const checks = await Promise.all(checksProm);
            if (!checks.some(x => x)) {
                projects.value.push(dirHandle);
            }
            activeProject.value = dirHandle;
        }
    };
    const getFileText = async (file: File) => {
        return await file.text();
    }
    const saveFileText = async (file: File, text: string) => {
        const fileHandle = activeProjectFileHandles.value.find(x => x.file === file);
        if (fileHandle) {
            const writable = await fileHandle.handle.createWritable();
            await writable.write(new Blob([text], { type: 'text/plain' }));
            await writable.close();
        }
    }
    const activeProjectName = computed(() => activeProject.value?.name);
    const activeProjectFileHandles = dirFiles(activeProject);
    const activeProjectFiles = computed(() => activeProjectFileHandles.value.map(x => x.file));
    return {
        projects,
        openFolder,
        projectsNames: computed(() => projects.value.map(x => x.name)),
        activeProject: {
            name: activeProjectName,
            files: activeProjectFiles,
            fileNames: computed(() => activeProjectFiles.value.map(x => x.name)),
        },
        getFileText,
        saveFileText,
    };
});

async function verifyPermission(dirHandle: FileSystemDirectoryHandle) {
    const options = {
        mode: 'readwrite'
    };
    // Check if permission was already granted. If so, return true.
    if ((await dirHandle.queryPermission(options)) === 'granted') {
      return true;
    }
    // Request permission. If the user grants permission, return true.
    if ((await dirHandle.requestPermission(options)) === 'granted') {
      return true;
    }
    // The user didn't grant permission, so return false.
    return false;
  }

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCoyaStore, import.meta.hot))
