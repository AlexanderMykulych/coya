import * as arrow from "curved-arrows";
export function getBoxToBoxArrow(...args: any) {
    const [x1, y1, cx1, cy1, cx2, cy2, x2, y2, ae, as] = arrow.getBoxToBoxArrow.apply(null, args);
    return {
        x1, y1, cx1, cy1, cx2, cy2, x2, y2, ae, as,
    };
}