/** New file: unified (added) so the list has a third expanded row to scroll off-screen. */
export type Diagnostic = {
  code: string;
  path: string;
  line: number;
  message: string;
};

export function collectDiagnostics(path: string, lineCount: number): Diagnostic[] {
  const out: Diagnostic[] = [];
  for (let line = 1; line <= lineCount; line++) {
    if (line % 37 === 0) {
      out.push({
        code: "STO-DEPTH",
        path,
        line,
        message: `synthetic depth warning on ${path}:${line} for the off-screen file check`,
      });
    }
  }
  return out;
}

export const DIAGNOSTIC_CODES = ["STO-DEPTH", "STO-WRAP", "STO-CRASH"] as const;
