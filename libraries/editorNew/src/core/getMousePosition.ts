import { Point } from "./types";

export function getMousePosition(svg: SVGSVGElement | null, event: MouseEvent): Point {
    if (!svg) {
        return { x: 0, y: 0 };
    }
    const pt = svg?.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;
    return pt.matrixTransform(svg?.getScreenCTM()?.inverse());
}
