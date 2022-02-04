export const getFileUniqName = async(folder: FileSystemDirectoryHandle, name: string, ext: string) => {
    const files: any = {};
    for await (const file of folder.values())
        files[file.name] = true;

    let index = 0;
    const getName = () => `${name}${index > 0 ? `_${index.toString()}` : ''}.${ext}`;
    while (files[getName()] === true)
        index++;

    return getName();
};
