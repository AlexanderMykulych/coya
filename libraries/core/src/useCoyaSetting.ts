import { inject, toRefs } from 'vue';
import type { CoyaSetting } from './types';

export function useCoyaSetting() {
    const setting = inject<CoyaSetting>('coya-settings', {});
    return toRefs(setting);
}
