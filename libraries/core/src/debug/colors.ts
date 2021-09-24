export const colors = [
    "5d737e",
    "64b6ac",
    "c0fdfb",
    "daffef",
    "fcfffd",
    "001021",
    "c19875",
    "f7ff58",
    "ff934f"
];
let colorIndex = 0;
export const getColor = () => {
    if (colorIndex >= colors.length) {
        colorIndex = 0;
    }
    return `#${colors[colorIndex++]}`;
}