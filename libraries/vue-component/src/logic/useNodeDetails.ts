
export function useNodeDetails() {
    const hoveredItem = ref(null);
    const clickedItem = ref(null);
    return {
        onMouseover: (item) => {
            hoveredItem.value = item;
        },
        onMouseleave: () => {
            hoveredItem.value = null;
        },
        onClick: (item) => {
            clickedItem.value = item;
        },
        item: computed(() => hoveredItem.value ?? clickedItem.value),
    };
}
