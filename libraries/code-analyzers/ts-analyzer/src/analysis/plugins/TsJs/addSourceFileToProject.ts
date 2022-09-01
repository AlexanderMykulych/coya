import type { Project } from "ts-morph"
import { progress } from "../../../progress/progress"

function _addSourceFileToProject(project: Project, name: string, text: string) {
  project.createSourceFile(
    name,
    text,
    {
      overwrite: true,
    },
  )
}

export const addSourceFileToProject = progress('addSourceFileToProject', _addSourceFileToProject)