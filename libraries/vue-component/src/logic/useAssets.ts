import type { AssetConfig } from 'coya-core';
import { inject, provide } from 'vue';

const assetsKey = 'coyaAssets';
export function provideAssets(assets?: AssetConfig) {
    if (!assets) {
        assets = inject(assetsKey, assets);
    } else {
        provide(assetsKey, assets);
    }
    return assets;
}

const defaultAssets = {
    load: () => undefined,
    create: () => undefined,
};

export function useAssets() {
    const assets = inject<AssetConfig | undefined>(assetsKey) ?? defaultAssets;
    return {
        getContent: async(name?: string) => {
            if (!name)
                return;

            return await assets.load(name);
        },
        getImgUrl: async(name: string) => {
            const blob = await assets.load(name);
            if (typeof blob === 'string')
                return blob;

            return await blobToBase64(blob);
        },
        getText: async(name: string) => {
            const blobOrText = await assets.load(name);
            if (typeof blobOrText === 'string')
                return blobOrText;

            return await blobOrText.text();
        },
        create: assets?.create,
    };
}
function blobToBase64(blob: Blob) {
    return blob
        ? new Promise((resolve) => {
            const reader = new FileReader();
            reader.onloadend = () => resolve(reader.result);
            reader.readAsDataURL(blob);
        })
        : '';
}
