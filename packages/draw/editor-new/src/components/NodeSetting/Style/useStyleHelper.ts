import { isFunction } from '@vueuse/core';
import { computed, ref } from 'vue';
import { useCurrentEditorState } from '../../../libMain';
import { helpers } from './helpers';

const isHelpersOpened = ref(false);

export const useStyleHelper = () => {
    const { activeNode } = useCurrentEditorState();
    const css = computed(() => activeNode.css);
    const availableHelpers = computed(() => helpers.filter(x => x.canHelp(css.value)));
    return {
        helpers: availableHelpers,
        someHelpers: computed(() => availableHelpers.value?.length > 0),
        applyHelper: (helper: (typeof helpers)[0]) => {
            const newCss = helper.applyHelp(css.value);
            activeNode.css = newCss;
        },
        applyStyle: (style) => {
            if (isFunction(style)) {
                activeNode.css = style(activeNode.css);
            }
            else {
                activeNode.css = {
                    ...activeNode.css,
                    ...style,
                };
            }
        },
        toggleHelpers: () => isHelpersOpened.value = !isHelpersOpened.value,
        isHelpersOpened,
    };
};
