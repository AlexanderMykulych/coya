import { FileSystemHost, RuntimeDirEntry } from "ts-morph";
import { ViteDevServer } from "vite";

export class CustomFileHost implements FileSystemHost {
  viteDevServer: ViteDevServer;
  baseFileHost: FileSystemHost;
  constructor(viteDevServer: ViteDevServer, baseFileHost: FileSystemHost) {
    this.viteDevServer = viteDevServer
    this.baseFileHost = baseFileHost
  }
  isCaseSensitive(): boolean {
    return this.baseFileHost.isCaseSensitive()
  }
  delete(path: string): Promise<void> {
    return this.baseFileHost.delete(path)
  }
  deleteSync(path: string): void {
    this.baseFileHost.deleteSync(path)
  }
  readDirSync(dirPath: string): RuntimeDirEntry[] {
    return this.baseFileHost.readDirSync(dirPath)
  }
  async readFile(filePath: string, encoding?: string | undefined): Promise<string> {
    const code = await this.baseFileHost.readFile(filePath)
    const result = await this.viteDevServer.pluginContainer.transform(code, filePath)

    return result?.code ?? code
  }
  readFileSync(filePath: string, encoding?: string | undefined): string {
    throw new Error("Method not implemented.");
  }
  writeFile(filePath: string, fileText: string): Promise<void> {
    return this.baseFileHost.writeFile(filePath, fileText)
  }
  writeFileSync(filePath: string, fileText: string): void {
    this.baseFileHost.writeFileSync(filePath, fileText)
  }
  mkdir(dirPath: string): Promise<void> {
    return this.baseFileHost.mkdir(dirPath)
  }
  mkdirSync(dirPath: string): void {
    this.baseFileHost.mkdirSync(dirPath)
  }
  move(srcPath: string, destPath: string): Promise<void> {
    return this.baseFileHost.move(srcPath, destPath)
  }
  moveSync(srcPath: string, destPath: string): void {
    this.baseFileHost.moveSync(srcPath, destPath)
  }
  copy(srcPath: string, destPath: string): Promise<void> {
    return this.baseFileHost.copy(srcPath, destPath)
  }
  copySync(srcPath: string, destPath: string): void {
    this.baseFileHost.copySync(srcPath, destPath)
  }
  fileExists(filePath: string): Promise<boolean> {
    return this.baseFileHost.fileExists(filePath)
  }
  fileExistsSync(filePath: string): boolean {
    throw new Error("Method not implemented.");
  }
  directoryExists(dirPath: string): Promise<boolean> {
    return this.baseFileHost.directoryExists(dirPath)
  }
  directoryExistsSync(dirPath: string): boolean {
    return this.baseFileHost.directoryExistsSync(dirPath)
  }
  realpathSync(path: string): string {
    return this.baseFileHost.realpathSync(path)
  }
  getCurrentDirectory(): string {
    return this.baseFileHost.getCurrentDirectory()
  }
  glob(patterns: readonly string[]): Promise<string[]> {
    return this.baseFileHost.glob(patterns)
  }
  globSync(patterns: readonly string[]): string[] {
    return this.baseFileHost.globSync(patterns)
  }

}