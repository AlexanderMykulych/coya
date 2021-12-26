export interface AssetConfig {
    name: string;
    href: string;
}
export type AssetConfigs = AssetConfig[];
const assetsStr = "assets";
export function provideAssets(assets: AssetConfigs) {
    provide(assetsStr, assets);
}

export function useAssets() {
    const assets = inject<AssetConfigs | undefined>(assetsStr);
    return {
        getUrl: (name?: string) => assets?.find(x => x.name === name)?.href,
    };
}