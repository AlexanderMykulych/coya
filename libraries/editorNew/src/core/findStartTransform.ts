import { Architecture } from "coya-core";
import { DiagramRectangle } from "./types";


export const findStartTransform = (arch: Architecture, svg: SVGSVGElement): DiagramRectangle => {
    const svgWidth = svg.width.baseVal.value;
    const svgHeight = svg.height.baseVal.value;
    let minX = Number.MAX_SAFE_INTEGER;
    let minY = Number.MAX_SAFE_INTEGER;
    let maxX = Number.MIN_SAFE_INTEGER;
    let maxY = Number.MIN_SAFE_INTEGER;
    arch.style?.positioning.forEach(({ position }) => {
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
    const scale1 = svgWidth / (maxX - minX);
    const scale2 = svgHeight / (maxY - minY);
    const scale = Math.min(scale1, scale2);
    return {
        x: -minX * scale,
        y: -minY * scale,
        x1: minX,
        y1: minY,
        x2: maxX,
        y2: maxY,
        scale,
    };
};
