import * as vscode from 'vscode';

import { findPreviousBoundaryPosition } from './findPreviousBoundaryPosition';

export async function moveCursorToPreviousBoundary(): Promise<void> {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }
  const activeDocument = editor.document;
  const currentPosition = editor.selection.active;

  const newPosition = findPreviousBoundaryPosition(
    activeDocument, currentPosition,
  );
  if (newPosition) {
    editor.selection = new vscode.Selection(newPosition, newPosition);
  } else {
    // 通常の「前の単語」へ移動
    await vscode.commands.executeCommand('cursorWordStartLeft');
  }
}
