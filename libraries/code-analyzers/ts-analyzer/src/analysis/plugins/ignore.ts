import mm from 'micromatch'

const ignorePatterns = [
  '**/dist/**',
  '**/.history/**',
  '**/.git/**',
  '**/coverage/**',
  '**/node_modules/**',
  // '**/.*/**',
  '**/.cache/**',
]

const analyzeIgnorePatters = [
  ...ignorePatterns,
  '**/node_modules/**',
]

export function isIgnoredPath(path: string) {
  return mm.isMatch(path, ignorePatterns)
}

export function isAnalyzeIgnoredPath(path: string) {
  return mm.isMatch(path, analyzeIgnorePatters)
} 