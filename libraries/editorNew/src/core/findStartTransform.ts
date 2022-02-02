import { Architecture } from "coya-core";
import { isNotNullOrUndefined } from "coya-util";
import { DiagramRectangle } from "./types";


export const findStartTransform = (arch: Architecture, svg: SVGSVGElement): DiagramRectangle => {
    return findTransform(arch, svg);
};
export const findTransform = (arch: Architecture, svg: SVGSVGElement, blocks?: string[]) =>{
    const svgWidth = svg.width.baseVal.value;
    const svgHeight = svg.height.baseVal.value;
    let minX = Number.MAX_SAFE_INTEGER;
    let minY = Number.MAX_SAFE_INTEGER;
    let maxX = Number.MIN_SAFE_INTEGER;
    let maxY = Number.MIN_SAFE_INTEGER;
    arch.style?.positioning.forEach(({ position, blockId }) => {
        if (isNotNullOrUndefined(blocks) && blocks.length > 0 && !blocks.some(x => x === blockId)) {
            return;
        }
        if (minX > position.x) {
            minX = position.x;
        }
        if (minY > position.y) {
            minY = position.y;
        }
        if (maxX < position.x + position.w) {
            maxX = position.x + position.w;
        }
        if (maxY < position.y + position.h) {
            maxY = position.y + position.h;
        }
    });
    return getScale({
        minX,
        minY,
        maxX,
        maxY,
        svgHeight,
        svgWidth,
    });
}

export const getScale = ({ minX, minY, maxX, maxY, svgHeight, svgWidth }) => {
    let width = maxX - minX;
    let height = maxY - minY;
    let deltaX = (width * 0.2) / 2;
    let deltaY = (height * 0.2) / 2;

    if (width >= height) {
        const newHeight = (svgHeight * width) / svgWidth;
        deltaY = Math.abs(newHeight - height) / 2;
    } else {
        const newWidth = (svgWidth * height) / svgHeight;
        deltaX = Math.abs(newWidth - width) / 2;
    }

    minX -= deltaX;
    minY -= deltaY;
    maxX += deltaX;
    maxY += deltaY;
    const w = maxX - minX;
    const h = maxY - minY;
    const scale1 = svgWidth / w;
    const scale2 = svgHeight / h;
    const scale = Math.min(scale1, scale2);

    const newW = w * scale;
    const newH = h * scale;
    return {
        x: -minX * scale + (svgWidth - newW) / 2,
        y: -minY * scale + (svgHeight - newH) / 2,
        x1: minX,
        y1: minY,
        x2: maxX,
        y2: maxY,
        w,
        h,
        scale,
    };
}