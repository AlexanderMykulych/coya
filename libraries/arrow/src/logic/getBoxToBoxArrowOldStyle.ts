/* eslint-disable */
import type { ArrowDescriptor, ArrowOptions } from './ArrowDescriptor';
import { getBoxSideByPoint } from './getBoxSideByPoint';
import type {
    RectSide,
    Vec2,
} from './utils';
import {
    angleOf,
    controlPointOf,
    distanceOf,
    growBox,
    isPointInBox,
} from './utils';

/**
 * Get parameters to draw an S-curved line between two boxes.
 *
 * @returns [sx, sy, c1x, c1y, c2x, c2y, ex, ey, ae, as]
 * @example
 * const arrowHeadSize = 9
 * const [
 *  startX, startY,
 *  controlStartX, controlStartY,
 *  controlEndX, controlEndY,
 *  endX, endY,
 *  endAngle,
 *  startAngle
 * ] = getBoxToBoxArrow(0, 0, 100, 100, 200, 200, 200, 100, {
 *   padStart: 0,
 *   padEnd: arrowHeadSize, // make room for drawing arrow head
 * })
 */
export default function getBoxToBoxArrowOldStyle(
    /** start box */
    x0: number,
    y0: number,
    w0: number,
    h0: number,
    /** end box */
    x1: number,
    y1: number,
    w1: number,
    h1: number,
    userOptions?: ArrowOptions,
): ArrowDescriptor {
    const options = {
        padStart: 0,
        padEnd: 0,
        controlPointStretch: 50,
        ...userOptions,
    };

    /** Points of start box. */
    const startBox = { x: x0, y: y0, w: w0, h: h0 };
    const startAtTop = {
        x: x0 + w0 / 2,
        y: y0,
    };
    const startAtBottom = {
        x: x0 + w0 / 2,
        y: y0 + h0,
    };
    const startAtLeft = {
        x: x0,
        y: y0 + h0 / 2,
    };
    const startAtRight = {
        x: x0 + w0,
        y: y0 + h0 / 2,
    };

    /** Points of end box. */
    const endBox = { x: x1, y: y1, w: w1, h: h1 };
    const endAtTop = { x: x1 + w1 / 2, y: y1 };
    const endAtBottom = {
        x: x1 + w1 / 2,
        y: y1 + h1,
    };
    const endAtLeft = { x: x1, y: y1 + h1 / 2 };
    const endAtRight = {
        x: x1 + w1,
        y: y1 + h1 / 2,
    };

    const sides: RectSide[] = ['top', 'right', 'bottom', 'left'];
    const startPoints = [startAtTop, startAtRight, startAtBottom, startAtLeft];
    const endPoints = [endAtTop, endAtRight, endAtBottom, endAtLeft];

    let shortestDistance = 1 / 0;
    let bestStartPoint = userOptions?.startPoint ?? startAtTop;
    let bestEndPoint = userOptions?.endPoint ?? endAtTop;
    let bestStartSide = null;
    let bestEndSide = null;
    const keepOutZone = 15;
    for (let startSideId = 0; startSideId < sides.length; startSideId++) {
        const startPoint = startPoints[startSideId];
        if (isPointInBox(startPoint, growBox(endBox, keepOutZone))) continue;

        for (let endSideId = 0; endSideId < sides.length; endSideId++) {
            const endPoint = endPoints[endSideId];

            if (isPointInBox(endPoint, growBox(startBox, keepOutZone))) continue;

            const d = distanceOf(startPoint, endPoint);
            if (d < shortestDistance) {
                shortestDistance = d;
                if (!userOptions?.startPoint) {
                    bestStartPoint = startPoint;
                    bestStartSide = sides[startSideId];
                }
                if (!userOptions?.endPoint) {
                    bestEndPoint = endPoint;
                    bestEndSide = sides[endSideId];
                }
            }
        }
    }

    bestStartSide ??= getBoxSideByPoint(startBox, bestStartPoint);
    bestEndSide ??= getBoxSideByPoint(endBox, bestEndPoint);
    bestStartPoint = preparePad(bestStartSide, bestStartPoint, userOptions?.padStart);
    bestEndPoint = preparePad(bestEndSide, bestEndPoint, userOptions?.padEnd);
    const controlPointForStartPoint = controlPointOf(
        bestStartPoint,
        bestEndPoint,
        bestStartSide,
        options.controlPointStretch,
    );
    const controlPointForEndPoint = controlPointOf(
        bestEndPoint,
        bestStartPoint,
        bestEndSide,
        options.controlPointStretch,
    );

    return [
        bestStartPoint.x,
        bestStartPoint.y,
        controlPointForStartPoint.x,
        controlPointForStartPoint.y,
        controlPointForEndPoint.x,
        controlPointForEndPoint.y,
        bestEndPoint.x,
        bestEndPoint.y,
        angleOf(bestEndSide),
        angleOf(bestStartSide),
    ];
}

const preparePad = (side: RectSide, point: Vec2, pad?: number) => {
    if (!pad)
        return point;

    const multiplier = 2.5;
    switch (side) {
        case 'top':
            return {
                x: point.x,
                y: point.y - multiplier * pad,
            };
        case 'bottom':
            return {
                x: point.x,
                y: point.y + multiplier * pad,
            };
        case 'left':
            return {
                x: point.x - multiplier * pad,
                y: point.y,
            };
        case 'right':
            return {
                x: point.x + multiplier * pad,
                y: point.y,
            };
    }
};
