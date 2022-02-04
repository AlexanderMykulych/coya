import { acceptHMRUpdate, defineStore } from 'pinia';
import { computed, ref } from 'vue';
import { get, set } from 'idb-keyval';
import { dirFiles } from './dirFiles';
import { verifyPermission } from './verifyPermission';

interface ActiveFile {
    handle: FileSystemFileHandle
    file: File
    name: string
}
export const useCoyaStore = defineStore('coya', () => {
    const projects = ref<FileSystemDirectoryHandle[]>([]);
    const activeProject = ref<FileSystemDirectoryHandle | undefined>();
    const activeFile = ref<ActiveFile | undefined>();
    const isVerified = ref(false);
    get<FileSystemDirectoryHandle>('coya:active')
        .then(async(val) => {
            if (val)
                projects.value = [val];
        });
    watchEffect(async() => await set('coya:active', activeProject.value));

    const openFolder = async() => {
        const dirHandle = await window.showDirectoryPicker();
        const checksProm = projects.value.map(x => x.isSameEntry(dirHandle));
        const checks = await Promise.all(checksProm);
        if (!checks.some(x => x))
            projects.value.push(dirHandle);

        await activateProject(dirHandle);
    };
    const getFileText = async(file: File) => {
        return await file.text();
    };
    const saveFileText = async(file: File, text: string) => {
        const fileHandle = activeProjectHandles.value.find(x => x.file === file);
        saveFileHandleText(fileHandle?.handle, text);
    };
    const saveFileHandleText = async(fileHandle?: FileSystemFileHandle, content?: any, mimeType?: string) => {
        if (fileHandle) {
            const writable = await fileHandle.createWritable();
            await writable.write(new Blob([content ?? ''], { type: mimeType ?? 'text/plain' }));
            await writable.close();
        }
    };
    const activateProject = async(project: FileSystemDirectoryHandle) => {
        isVerified.value = false;
        if (await verifyPermission(project)) {
            isVerified.value = true;
            activeProject.value = project;
        }
    };
    const activateProjectFile = async(file: File) => {
        const fileHandle = activeProjectHandles.value.files.find(x => x.file === file)?.handle;
        if (fileHandle) {
            const file = await fileHandle.getFile();
            activeFile.value = {
                handle: fileHandle,
                file,
                name: file.name,
            };
        }
    };
    const createAsset = async({ name, ext, content, mime }: { name: string; ext: string; content: any; mime?: string }) => {
        if (activeProject.value) {
            const assetsHandle = activeProjectHandles.value.folders.find(x => x.handle.name === 'assets');
            if (!assetsHandle) {
                const assetsHandle = await activeProject.value.getDirectoryHandle('assets', {
                    create: true,
                });
                activeProjectHandles.value.folders.push({ handle: assetsHandle });
            }
            const uniqName = await getFileUniqName(assetsHandle!.handle, name, ext);

            const newFileHandle = await assetsHandle!.handle.getFileHandle(uniqName, { create: true });
            await saveFileHandleText(newFileHandle, content, mime);
            return uniqName;
        }
    };
    const loadAsset = async(name?: string) => {
        if (!name)
            return null;

        const assetsHandle = activeProjectHandles.value.folders.find(x => x.handle.name === 'assets');
        if (assetsHandle) {
            try {
                let dirHandle = assetsHandle.handle;
                if (await verifyPermission(dirHandle)) {
                    let paths = name.split('/');
                    const fileName = paths[paths.length - 1];
                    paths = paths.slice(0, paths.length - 1);
                    for await (const path of paths)
                        dirHandle = await dirHandle.getDirectoryHandle(path);

                    const fileHandle = await dirHandle.getFileHandle(fileName);
                    if (fileHandle) {
                        const file = await fileHandle.getFile();
                        return file;
                    }
                }
            }
            catch (e) {
                console.error(name, e);
                return null;
            }
        }
    };
    const createNewCoya = async(name: string, content: string) => {
        const ext = 'coya.json';
        if (activeProject.value) {
            const uniqName = await getFileUniqName(activeProject.value, name, ext);

            const newFileHandle = await activeProject.value.getFileHandle(uniqName, { create: true });
            await saveFileHandleText(newFileHandle, content);
            activeProjectHandles.value.files.push({
                file: await newFileHandle.getFile(),
                handle: newFileHandle,
            });
            return uniqName;
        }
    };
    const activeProjectName = computed(() => activeProject.value?.name);
    const activeProjectHandles = dirFiles(activeProject, isVerified);
    const activeProjectFiles = computed(() => activeProjectHandles.value.files.map(x => x.file));
    const activeProjectCoyaFiles = computed(() => activeProjectFiles.value.filter(x => x.name.endsWith('.coya.json')));
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
            activeFile,
            getActiveFileText: async() => {
                return await activeFile.value?.file?.text();
            },
            setActiveFileText: async(text: string) => await saveFileHandleText(activeFile.value?.handle, text),
            createAsset,
            loadAsset,
            createNewCoya,
        },
        getFileText,
        saveFileText,
        activateProject,
        activateProjectFile,
    };
});

const getFileUniqName = async(folder: FileSystemDirectoryHandle, name: string, ext: string) => {
    const files: any = {};
    for await (const file of folder.values())
        files[file.name] = true;

    let index = 0;
    const getName = () => `${name}${index > 0 ? `_${index.toString()}` : ''}.${ext}`;
    while (files[getName()] === true)
        index++;

    return getName();
};

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useCoyaStore, import.meta.hot));
