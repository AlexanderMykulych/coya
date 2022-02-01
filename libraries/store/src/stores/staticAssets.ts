
export interface StaticAssetsConfig {
    loadModule: (name: string) => Record<string, any>;
    loadRawAsset: (name: string) => Record<string, any>;
}
const images = ['.png', '.gif'];
export const staticAssets = (config: StaticAssetsConfig) => {
    return {
        assets: {
            create: async (name: string, content: string) => { },
            load: async (name: string) => {
                if (!name) {
                    return;
                }
                if (images.some(image => name.endsWith(image))) {
                    const module = await config.loadModule(name);
                    return module.default;
                }
                return await config.loadRawAsset(name);
            },
        },
    }
};
