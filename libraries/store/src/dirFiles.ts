import { Ref, ref, watchEffect } from "vue";

export const dirFiles = (dir: Ref<FileSystemDirectoryHandle | undefined>) => {
    const res = ref<{ handle: FileSystemFileHandle; file: File; }[]>([]);
    watchEffect(async () => {
        if (!dir.value) {
            return [];
        }
        const promises = [];
        for await (const handle of dir.value.values()) {
            if (handle.kind === "file") {
                const file = await handle.getFile();
                promises.push({
                    handle,
                    file,
                });
            }
        }
        res.value = promises;
    });
    return res;
};
