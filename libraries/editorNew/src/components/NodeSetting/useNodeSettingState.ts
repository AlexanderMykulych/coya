import { ref } from 'vue';

type ActiveTab = 'general' | 'style';

const activeTab = ref<ActiveTab>('general');
export const useNodeSettingState = () => {
    return {
        activeTab,
        activateTab: (tab: ActiveTab) => activeTab.value = tab,
    };
};
