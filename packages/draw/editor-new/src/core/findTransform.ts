import type { Architecture } from 'coya-core';
import { isNotNullOrUndefined } from 'coya-util';
import { getScale } from './getScale';

export const findTransform = (arch: Architecture, svg: SVGSVGElement, blocks?: string[]) => {
    const svgWidth = svg.width.baseVal.value;
    const svgHeight = svg.height.baseVal.value;
    let minX = Number.MAX_SAFE_INTEGER;
    let minY = Number.MAX_SAFE_INTEGER;
    let maxX = Number.MIN_SAFE_INTEGER;
    let maxY = Number.MIN_SAFE_INTEGER;
    arch.style?.positioning.forEach(({ position, blockId }) => {
        if (isNotNullOrUndefined(blocks) && blocks.length > 0 && !blocks.includes(blockId))
            return;

        if (minX > position.x)
            minX = position.x;

        if (minY > position.y)
            minY = position.y;

        if (maxX < position.x + position.w)
            maxX = position.x + position.w;

        if (maxY < position.y + position.h)
            maxY = position.y + position.h;
    });
    return getScale({
        minX,
        minY,
        maxX,
        maxY,
        svgHeight,
        svgWidth,
    });
};
