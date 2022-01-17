import { AssetConfig } from "coya-core";

const assetsKey = "coyaAssets";
export function provideAssets(assets: AssetConfig) {
    provide(assetsKey, assets);
}

export function useAssets() {
    const assets = inject<AssetConfig | undefined>(assetsKey);
    if (!assets) {
        return;
    }
    return {
        getContent: async (name?: string) => {
            if (!name) {
                return;
            }
            return await assets.load(name);
        },
        getImgUrl: async (name: string) => {
            const blob = await assets.load(name);
            return await blobToBase64(blob);
        },
        getText: async (name: string) => {
            const blob = await assets.load(name);
            return await blob.text();
        },
        create: assets?.create
    };
}
function blobToBase64(blob: Blob) {
    return !!blob ? new Promise((resolve, _) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(blob);
    }) : "";
}