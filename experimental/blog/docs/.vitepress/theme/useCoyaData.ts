import { reactive } from 'vue';

const state = reactive({
    config: null,
    controller: null,
});

export const useCoyaData = () => {
    return {
        state,
        setConfig: (config) => state.config = config,
        scaleTo: (...blocks: string[]) => state.controller?.scaleToStart(blocks),
    };
};