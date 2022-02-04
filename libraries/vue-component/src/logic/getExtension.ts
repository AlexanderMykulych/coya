export const getExtension = (fileName: string) => {
    const items = fileName.split('.');
    return items?.[items?.length - 1];
};
