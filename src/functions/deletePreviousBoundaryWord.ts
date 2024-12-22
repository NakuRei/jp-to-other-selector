import * as vscode from 'vscode';
import { findPreviousBoundaryPosition } from './findPreviousBoundaryPosition';

export function deletePreviousBoundaryWord(): void {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }
  const activeDocument = editor.document;

  const sortedSelections = [...editor.selections].sort((a, b) => {
    return a.active.line === b.active.line
      ? a.active.character - b.active.character
      : a.active.line - b.active.line;
  });

  editor.edit((editBuilder) => {
    sortedSelections.forEach((selection) => {
      const position = selection.active;
      const previousBoundaryPosition = findPreviousBoundaryPosition(
        activeDocument, position,
      );
      // 境界が見つかった場合、その範囲を削除
      if (previousBoundaryPosition) {
        const range = new vscode.Range(previousBoundaryPosition, position);
        editBuilder.delete(range);
      } else {
        // 境界が見つからなかった場合、デフォルトの削除処理を実行
        vscode.commands.executeCommand('deleteWordStartLeft');
      }
    });
  });
}
