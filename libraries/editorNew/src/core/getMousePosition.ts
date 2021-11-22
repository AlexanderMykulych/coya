import { Point } from "./types";

export function getMousePosition(svg: SVGSVGElement | null, event: MouseEvent): Point {
    if (!svg) {
        return { x: 0, y: 0 };
    }
    const g = svg.querySelector("g[transform]");
    const ctm = !!g ? g?.getCTM() : svg.getScreenCTM();
    const pt = svg?.createSVGPoint();
    pt.x = event.clientX;
    pt.y = event.clientY;
    return pt.matrixTransform(ctm?.inverse());
}
