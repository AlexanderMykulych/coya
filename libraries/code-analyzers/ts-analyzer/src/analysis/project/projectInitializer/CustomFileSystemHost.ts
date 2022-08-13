import { FileSystemHost } from 'ts-morph';



export class CustomFileSystemHost implements FileSystemHost {
  instance: FileSystemHost;
  waiters: Promise<void>[];

  constructor(instance: FileSystemHost, waiters: Promise<void>[]) {
    this.instance = instance;
    this.waiters = waiters;
  }
  /** @inheritdoc */
  delete() {
    return this.instance.delete.apply(this, arguments);
  }

  /** @inheritdoc */
  deleteSync(path: string) {
    return this.instance.deleteSync.apply(this, arguments);
  }

  /** @inheritdoc */
  readDirSync(dirPath: string): RuntimeDirEntry[] {
    return this.instance.readDirSync.apply(this, arguments);
  }

  /** @inheritdoc */
  async readFile(filePath: string, encoding = "utf-8") {
    return this.instance.readFile.apply(this, arguments);
  }

  /** @inheritdoc */
  readFileSync(filePath: string, encoding = "utf-8") {

    const content = this.instance.readFileSync.call(this.instance, filePath, encoding);



    return content
  }

  /** @inheritdoc */
  writeFile(filePath: string, fileText: string) {
    return this.instance.writeFile.apply(this, arguments);
  }

  /** @inheritdoc */
  writeFileSync(filePath: string, fileText: string) {
    return this.instance.writeFileSync.apply(this, arguments);
  }

  /** @inheritdoc */
  mkdir(dirPath: string) {
    return this.instance.mkdir.apply(this, arguments);
  }

  /** @inheritdoc */
  mkdirSync(dirPath: string) {
    return this.instance.mkdirSync.apply(this, arguments);
  }

  /** @inheritdoc */
  move(srcPath: string, destPath: string) {
    return this.instance.move.apply(this, arguments);
  }

  /** @inheritdoc */
  moveSync(srcPath: string, destPath: string) {
    return this.instance.moveSync.apply(this, arguments);
  }

  /** @inheritdoc */
  copy(srcPath: string, destPath: string) {
    return this.instance.copy.apply(this, arguments);
  }

  /** @inheritdoc */
  copySync(srcPath: string, destPath: string) {
    return this.instance.copySync.apply(this, arguments);
  }

  /** @inheritdoc */
  fileExists() {
    return this.instance.fileExists.apply(this, arguments);
  }

  /** @inheritdoc */
  fileExistsSync() {
    return this.instance.fileExistsSync.apply(this, arguments);
  }

  /** @inheritdoc */
  directoryExists(dirPath: string) {
    return this.instance.directoryExists.apply(this, arguments);
  }

  /** @inheritdoc */
  directoryExistsSync(dirPath: string) {
    return this.instance.directoryExistsSync.apply(this, arguments);
  }

  /** @inheritdoc */
  realpathSync(path: string) {
    return this.instance.realpathSync.apply(this, arguments);
  }

  /** @inheritdoc */
  getCurrentDirectory(): string {
    return this.instance.getCurrentDirectory.apply(this, arguments);
  }

  /** @inheritdoc */
  glob(patterns: ReadonlyArray<string>) {
    return this.instance.glob.apply(this, arguments);
  }

  /** @inheritdoc */
  globSync(patterns: ReadonlyArray<string>) {
    return this.instance.globSync.apply(this, arguments);
  }

  /** @inheritdoc */
  isCaseSensitive() {
    return this.instance.isCaseSensitive.apply(this, arguments);
  }
}
