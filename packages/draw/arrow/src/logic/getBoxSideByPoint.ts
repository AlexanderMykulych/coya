import type {
    Box, RectSide,
    Vec2,
} from './utils';

const delta = 0.5;
export const getBoxSideByPoint = (box: Box, point: Vec2): RectSide => {
    if (point.x >= box.x && point.x <= box.x + box.w) {
        if (Math.abs(point.y - box.y) <= delta)
            return 'top';

        if (Math.abs(point.y - box.y - box.h) <= delta)
            return 'bottom';
    }
    if (point.y >= box.y && point.y <= box.y + box.h) {
        if (Math.abs(point.x - box.x) <= delta)
            return 'left';

        if (Math.abs(point.x - box.x - box.w) <= delta)
            return 'right';
    }
    return 'top';
};
