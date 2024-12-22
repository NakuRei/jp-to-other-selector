import * as vscode from 'vscode';

import { findPreviousBoundaryPosition } from './findPreviousBoundaryPosition';

export async function moveCursorToPreviousBoundary(): Promise<void> {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }
  const activeDocument = editor.document;

  // 新しいカーソル位置を計算
  const newSelections = editor.selections.map((selection) => {
    const currentPosition = selection.active;
    const newPosition = findPreviousBoundaryPosition(
      activeDocument, currentPosition,
    );
    if (newPosition) {
      return new vscode.Selection(newPosition, newPosition);
    }
    // 境界が見つからない場合
    return null;
  });

  // 境界が見つからなかったカーソルが存在する場合の処理
  if (newSelections.some((selection) => selection === null)) {
    // VSCodeのコマンドで「前の単語」に移動させる
    await vscode.commands.executeCommand('cursorWordStartLeft');

    // コマンド実行後のカーソル位置をすべて取得
    const updatedSelections = vscode.window.activeTextEditor?.selections ?? [];
    editor.selections = updatedSelections;
  } else {
    // 新しいカーソル位置を適用
    editor.selections = newSelections as vscode.Selection[];
  }
}
