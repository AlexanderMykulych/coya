import type { Fn } from '@vueuse/core';
import { fastDeepEqual } from 'coya-util';
import type { ComputedRef } from 'vue';

export function strictComputed<T, S>(source: () => S, fn: () => T, options?: any) {
    let v: T = undefined!;
    let track: Fn;
    let trigger: Fn;
    const dirty = ref(true);

    watch(
        source,
        (val, oldVal) => {
            if (!fastDeepEqual(val, oldVal)) {
                dirty.value = true;
                trigger();
            }
        },
    );

    return customRef<T>((_track, _trigger) => {
        track = _track;
        trigger = _trigger;
        if (options?.immediate) {
            dirty.value = true;
            _trigger();
        }
        return {
            get() {
                if (dirty.value) {
                    v = fn();
                    dirty.value = false;
                }
                track();
                return v;
            },
            set() { },
        };
    }) as ComputedRef<T>;
}
