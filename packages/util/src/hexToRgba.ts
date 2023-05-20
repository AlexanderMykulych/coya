import hexToRgbaLib from 'hex-to-rgba';

export const hexToRgba = (hex: string) => {
    return hexToRgbaLib(hex);
};
