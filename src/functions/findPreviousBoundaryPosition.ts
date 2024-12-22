import * as vscode from 'vscode';

import { boundaryRegex } from '../constants/boundaryRegex';

export function findPreviousBoundaryPosition(
  document: vscode.TextDocument,
  position: vscode.Position,
): vscode.Position | null {
  // 行頭の場合
  if (position.character === 0) {
    if (position.line > 0) {
      // 前の行のテキストを取得
      const previousLine = position.line - 1;
      const previousLineText = document.lineAt(previousLine).text;
      const boundaryMatches = [...previousLineText.matchAll(boundaryRegex)];
      if (boundaryMatches.length > 0) {
        const lastMatch = boundaryMatches[boundaryMatches.length - 1];
        const offset = lastMatch.index;
        return new vscode.Position(previousLine, offset);
      }
    }
    return null;
  }

  const currentLineText = document.lineAt(position.line).text;
  const textBeforeCursor = currentLineText.slice(0, position.character);
  const boundaryMatches = [...textBeforeCursor.matchAll(boundaryRegex)];

  if (boundaryMatches.length > 0) {
    const offset = boundaryMatches[boundaryMatches.length - 1].index;
    return position.with(position.line, offset);
  }

  return null;
}
