export const hexToRgb = (hex: string, aplha = 1): string => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    if (result) {
        const red = parseInt(result[1], 16);
        const green = parseInt(result[2], 16);
        const blue = parseInt(result[3], 16);
        return `rgba(${red}, ${green}, ${blue}, ${aplha})`;
    }
    return '';
}
