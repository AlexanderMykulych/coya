import vue3Traspiler from "../transpilers/vue3/vue3Traspiler";
import { FileProcessor } from "../types";

export default <FileProcessor>{
  isMatch(file) {
    return file.file.endsWith('.vue')
  },
  async process(file) {
    try {
      const code = await vue3Traspiler.traspile(file.text)

      return {
        file: `${file.file}.ts`,
        text: code,
      }
    } catch (e) {
      throw new Error(`file: ${file.file}, ${e}`, { cause: e as Error});
    }
  },
  processFilePath(filePath: string) {
    return filePath
  }
}
