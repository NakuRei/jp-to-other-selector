import * as vscode from 'vscode';

import { findPreviousBoundaryPosition } from './findPreviousBoundaryPosition';

export async function moveCursorToPreviousBoundaryWithSelection():
Promise<void> {
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
    // 現在の選択範囲を拡張
    const newSelection = new vscode.Selection(
      editor.selection.anchor, newPosition,
    );
    editor.selection = newSelection;
  } else {
    // 通常の「前の単語」へ移動（選択範囲拡張）
    await vscode.commands.executeCommand('cursorWordStartLeftSelect');
  }
}
