import * as vscode from 'vscode';

import { findNextBoundaryPosition } from './findNextBoundaryPosition';

export async function moveCursorToNextBoundary(): Promise<void> {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }
  const activeDocument = editor.document;
  const currentPosition = editor.selection.active;

  const newPosition = findNextBoundaryPosition(
    activeDocument, currentPosition,
  );
  if (newPosition) {
    editor.selection = new vscode.Selection(newPosition, newPosition);
  } else {
    // 通常の「次の単語」へ移動
    await vscode.commands.executeCommand('cursorWordEndRight');
  }
}
