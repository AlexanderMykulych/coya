/* eslint-disable */
import getBoxToBoxArrowOldStyle from './getBoxToBoxArrowOldStyle';
export interface getBoxToBoxArrowRes {
    x1: number
    y1: number
    x2: number
    y2: number
    cx1: number
    cy1: number
    cx2: number
    cy2: number
    ae: number
    as: number
}

export const getBoxToBoxArrow = (...args: Parameters<typeof getBoxToBoxArrowOldStyle>): getBoxToBoxArrowRes => {
    const [x1, y1, cx1, cy1, cx2, cy2, x2, y2, ae, as] = getBoxToBoxArrowOldStyle.apply(null, args);
    return {
        x1, y1, cx1, cy1, cx2, cy2, x2, y2, ae, as,
    };
};

export const getBoxToBoxArrowPath = (...args: Parameters<typeof getBoxToBoxArrow>): { path: string; results: getBoxToBoxArrowRes } => {
    const results = getBoxToBoxArrow(...args);
    const { x1, y1, cx1, cy1, cx2, cy2, x2, y2 } = results;
    return {
        path: `M ${x1} ${y1} C ${cx1} ${cy1}, ${cx2} ${cy2}, ${x2} ${y2}`,
        results: results ?? {},
    };
};
