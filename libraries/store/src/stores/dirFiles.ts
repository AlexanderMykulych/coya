import { Ref, ref, watchEffect } from "vue";

export const dirFiles = (dir: Ref<FileSystemDirectoryHandle | undefined>, isVerified: Ref<boolean>) => {
    const res = ref<{
        files: { handle: FileSystemFileHandle; file: File; }[],
        folders: { handle: FileSystemDirectoryHandle; }[]
    }>({
        files: [],
        folders: [],
    });
    watchEffect(async () => {
        if (!dir.value || !isVerified.value) {
            return [];
        }
        const files = [];
        const folders = [];
        for await (const handle of dir.value.values()) {
            if (handle.kind === "file") {
                const file = await handle.getFile();
                files.push({
                    handle,
                    file,
                });
            } else if (handle.kind === "directory") {
                folders.push({
                    handle
                });
            }
        }
        res.value = {
            files,
            folders,
        };
    });
    return res;
};
