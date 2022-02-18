import { translateCoordinate } from './translateCoordinate';

export function getRectPosProxy(target, scale, translate, parentPos) {
    return new Proxy(target, {
        get(target, attr) {
            const res = target[attr];
            if (!res && typeof res !== 'number') {
                return res;
            }
            if (attr === 'x') {
                return translateCoordinate(res, scale, translate.x, parentPos.x.value);
            } else if (attr === 'y') {
                return translateCoordinate(res, scale, translate.y, parentPos.y.value);
            } else if (attr === 'w' || attr === 'h') {
                return translateCoordinate(res, scale, 0, 0);
            } else if (attr === 'top') {
                return getRectPosProxy(res, scale, translate, parentPos);
            }
            return getRectPosProxy(res, scale, translate, parentPos);
        },
    });
}
