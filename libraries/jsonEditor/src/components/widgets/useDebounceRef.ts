export function useDebouncedRef(value: any, delay = 200) {
    let timeout: NodeJS.Timeout | null = null;
    return customRef((track, trigger) => {
        return {
            get() {
                track();
                return value;
            },
            set(newValue) {
                if (timeout)
                    clearTimeout(timeout);

                timeout = setTimeout(() => {
                    value = newValue;
                    trigger();
                }, delay);
            },
        };
    });
}
