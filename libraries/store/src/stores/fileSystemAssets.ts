import { useCoyaStore } from './useCoyaStore';

export const fileSystemAssets = () => {
    const store = useCoyaStore();
    return {
        store,
        assets: {
            create: store.activeProject.createAsset,
            load: store.activeProject.loadAsset,
        },
    };
};
