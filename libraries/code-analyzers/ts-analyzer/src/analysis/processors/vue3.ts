import vue3Traspiler from "../transpilers/vue3/vue3Traspiler";
import { FileProcessor } from "../types";

export default <FileProcessor>{
  isMatch(file) {
    return file.file.endsWith('.vue')
  },
  async process(file) {
    const code = await vue3Traspiler.traspile(file.text)

    return {
      file: `${file.file}.ts`,
      text: code,
    }
  },
  processFilePath(filePath: string) {
    return filePath
  }
}
