export async function verifyPermission(dirHandle: FileSystemDirectoryHandle, retryIfError: boolean = true) {
    const options = {
        mode: 'readwrite'
    };
    // Check if permission was already granted. If so, return true.
    try {
        if ((await dirHandle.queryPermission(options)) === 'granted') {
            return true;
        }
        // Request permission. If the user grants permission, return true.
        if ((await dirHandle.requestPermission(options)) === 'granted') {
            return true;
        }
    }
    catch (e) {
        console.log(e);
        if (retryIfError) {
            await timeout(2000);
            return verifyPermission(dirHandle, false);
        }
    }
    // The user didn't grant permission, so return false.
    return false;
}
function timeout(ms: number) {
    return new Promise(resolve => setTimeout(resolve, ms));
}