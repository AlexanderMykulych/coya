import { getRectPosProxy } from './getRectPosProxy';

export function getPositionProxy(position, childrenBlocks) {
    return new Proxy(position, {
        get(target, attr) {
            if (attr !== '_' && typeof attr === 'string' && attr.startsWith('$_')) {
                return new Proxy({
                    parentPos: position,
                }, {
                    get(target, attr) {
                        if (typeof attr === 'string' && attr.startsWith('__v_')) {
                            return target[attr];
                        }
                        const arch = childrenBlocks?.arch;
                        const res = arch?.style?.positioning?.find(x => x.blockId === attr)?.position;
                        if (res && childrenBlocks?.editor) {
                            const zoomState = childrenBlocks.editor.zoomState;
                            return zoomState ? getRectPosProxy(res, zoomState.scale, zoomState.translate, target.parentPos) : target.parentPos;
                        }
                        return target.parentPos;
                    },
                });
            }
            return target[attr];
        },
    });
}
