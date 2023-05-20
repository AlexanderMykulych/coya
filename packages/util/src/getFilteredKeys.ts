export const getFilteredKeys = (obj: any) => Object.entries(obj)
    .filter(([_, val]) => val !== undefined)
    .map(([key]) => key);
