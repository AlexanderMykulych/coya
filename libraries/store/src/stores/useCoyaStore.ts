import { acceptHMRUpdate, defineStore } from 'pinia';
import { computed, ref } from "vue";
import { dirFiles } from "./dirFiles";
import { verifyPermission } from './verifyPermission';
import { get, set } from 'idb-keyval';

export const useCoyaStore = defineStore('coya', () => {
    const projects = ref<FileSystemDirectoryHandle[]>([]);
    const activeProject = ref<FileSystemDirectoryHandle | undefined>();
    const activeFileHandel = ref<FileSystemFileHandle | undefined>();
    const isVerified = ref(false);
    get<FileSystemDirectoryHandle>("coya:active")
        .then(async val => {
            if (val) {
                projects.value = [val];
            }
        });
    watchEffect(async () => await set('coya:active', activeProject.value));

    const openFolder = async () => {
        const dirHandle = await window.showDirectoryPicker();
        const checksProm = projects.value.map(x => x.isSameEntry(dirHandle));
        const checks = await Promise.all(checksProm);
        if (!checks.some(x => x)) {
            projects.value.push(dirHandle);
        }
        await activateProject(dirHandle);
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
    const activateProject = async (project: FileSystemDirectoryHandle) => {
        isVerified.value = false;
        if (await verifyPermission(project)) {
            isVerified.value = true;
            activeProject.value = project;
        }
    };
    const activateProjectFile = async (file: File) => {
        const fileHandle = activeProjectFileHandles.value.find(x => x.file === file)?.handle;
        if (fileHandle) {
            activeFileHandel.value = fileHandle;
        }
    }
    const activeProjectName = computed(() => activeProject.value?.name);
    const activeProjectFileHandles = dirFiles(activeProject, isVerified);
    const activeProjectFiles = computed(() => activeProjectFileHandles.value.map(x => x.file));
    const activeProjectCoyaFiles = computed(() => activeProjectFiles.value.filter(x => x.name.endsWith(".coya.json")));
    return {
        projects,
        openFolder,
        projectsNames: computed(() => projects.value.map(x => x.name)),
        activeProject: {
            name: activeProjectName,
            files: activeProjectFiles,
            coyaFiles: activeProjectCoyaFiles,
            fileNames: computed(() => activeProjectFiles.value.map(x => x.name)),
            opened: computed(() => !!activeProject.value && isVerified.value),
            activeFileHandel, 
        },
        getFileText,
        saveFileText,
        activateProject,
        activateProjectFile,
    };
});

if (import.meta.hot)
  import.meta.hot.accept(acceptHMRUpdate(useCoyaStore, import.meta.hot))
