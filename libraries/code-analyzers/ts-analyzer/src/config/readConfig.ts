import { readFile, stat } from "fs/promises";
import type { AnalysisConfig } from "../analysis/context/analysisContextType";

export async function readConfig(path: string): Promise<AnalysisConfig | null> {
  const configPath = `${path}/.coya/coya.config.json`

  console.log('try to find config:', configPath)
  
  try {
    const res = await stat(configPath)
    if (res) {
      const fileBuf = await readFile(configPath, {
        flag: 'r',
        encoding: 'utf-8',
      })

      const configText = fileBuf.toString()

      const config = JSON.parse(configText) as AnalysisConfig

      console.log('Found config:', configPath)

      return config
    }
  } catch {}

  return null
}
