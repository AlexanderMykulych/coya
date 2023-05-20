
export const translateCoordinate = (x: number, scale: number, translate: number, parentPos: number) => {
    return x * scale + translate + parentPos;
};
