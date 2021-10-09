import { unref } from "vue";
import { PointPosition } from "../../types";

export function findClosestPoints(points1: PointPosition[], points2: PointPosition[]) {
    let min: number = Number.MAX_SAFE_INTEGER;
    let minP1: PointPosition | null = null;
    let minP2: PointPosition | null = null;
    points1.forEach(p1 => {
        points2.forEach(p2 => {
            const dist = findPointsDistance(p1, p2);
            if (min > dist) {
                min = dist;
                minP1 = p1;
                minP2 = p2;
            }
        });
    });
    return {
        p1: minP1,
        p2: minP2
    };
}
export function findPointsDistance(p1: PointPosition, p2: PointPosition): number {
    var a = unref(p1.x) - unref(p2.x);
    var b = unref(p1.y) - unref(p2.y);
    return Math.sqrt( a*a + b*b );
}