import type { Ref } from 'vue';
import { getRectPosProxy } from './getRectPosProxy';

export function getPositionProxy(position, childrenBlocks: Ref) {
    return new Proxy(position, {
        get(target, attr) {
            if (attr !== '_' && typeof attr === 'string' && attr.startsWith('$_')) {
                return new Proxy({
                    parentPos: position,
                }, {
                    get(target, attr) {
                        if ((typeof attr === 'string' && attr.startsWith('__v_')) || typeof attr === 'symbol') {
                            return target[attr];
                        }
                        const arch = childrenBlocks.value?.arch;
                        const res = arch?.style?.positioning?.find(x => x.blockId === attr)?.position;
                        if (res && childrenBlocks.value?.editor) {
                            const zoomState = childrenBlocks.value.editor.zoomState;
                            return zoomState
                                ? getRectPosProxy(res, zoomState.scale, zoomState.translate, target.parentPos)
                                : getPositionProxy(target.parentPos, childrenBlocks);
                        }
                        return getPositionProxy(target.parentPos, childrenBlocks);
                    },
                });
            }
            return target[attr];
        },
    });
}
