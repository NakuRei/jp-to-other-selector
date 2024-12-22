import * as vscode from 'vscode';

import { boundaryRegex } from '../constants/boundaryRegex';

export function findNextBoundaryPosition(
  document: vscode.TextDocument,
  position: vscode.Position,
): vscode.Position | null {
  // 行末の場合
  if (position.character === document.lineAt(position.line).text.length) {
    if (position.line + 1 < document.lineCount) {
      // 次の行のテキストを取得
      const nextLine = position.line + 1;
      const nextLineText = document.lineAt(nextLine).text;
      const boundaryMatches = [...nextLineText.matchAll(boundaryRegex)];
      if (boundaryMatches.length > 1) {
        const secondMatch = boundaryMatches[1];
        const offset = secondMatch.index;
        return new vscode.Position(nextLine, offset);
      }
    }
    return null;
  }

  const currentLineText = document.lineAt(position.line).text;
  const textAfterCursor = currentLineText.slice(position.character);
  const boundaryMatches = [...textAfterCursor.matchAll(boundaryRegex)];

  if (boundaryMatches.length > 0) {
    const offset = boundaryMatches[0].index + boundaryMatches[0][0].length;
    return position.with(position.line, position.character + offset);
  }

  return null;
}
