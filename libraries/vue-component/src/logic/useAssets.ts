export interface AssetConfig {
    load: () => Promise<string>;
    getImgUrl: () => string | undefined;
    name: string;
}
export type AssetConfigs = AssetConfig[];
const assetsKey = "coyaAssets";
export function provideAssets(assets: AssetConfigs) {
    provide(assetsKey, assets);
}

export function useAssets() {
    const assets = inject<AssetConfigs | undefined>(assetsKey);
    return {
        getContent: async (name?: string) => {
            if (!name) {
                return;
            }
            const asset = assets?.find(x => x.name === name);
            if (asset) {
                return (await asset?.load()).default;
            }
        },
        getImgUrl: (name: string) => {
            const asset = assets?.find(x => x.name === name);
            if (asset) {
                return asset.getImgUrl();
            }
        }
    };
}