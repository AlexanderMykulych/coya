
export const getScale = ({ minX, minY, maxX, maxY, svgHeight, svgWidth }) => {
    const width = maxX - minX;
    const height = maxY - minY;
    let deltaX = (width * 0.2) / 2;
    let deltaY = (height * 0.2) / 2;

    if (width >= height) {
        const newHeight = (svgHeight * width) / svgWidth;
        deltaY = Math.abs(newHeight - height) / 2;
    }
    else {
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
};
