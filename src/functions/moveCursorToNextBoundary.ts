import * as vscode from 'vscode';

import { findNextBoundaryPosition } from './findNextBoundaryPosition';

export async function moveCursorToNextBoundary(): Promise<void> {
  const editor = vscode.window.activeTextEditor;
  if (!editor) {
    return;
  }
  const activeDocument = editor.document;

  // 新しいカーソル位置を計算
  const newSelections = editor.selections.map((selection) => {
    const currentPosition = selection.active;
    const newPosition = findNextBoundaryPosition(
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
    // VSCodeのコマンドで「次の単語」に移動させる
    await vscode.commands.executeCommand('cursorWordEndRight');

    // コマンド実行後のカーソル位置をすべて取得
    const updatedSelections = vscode.window.activeTextEditor?.selections ?? [];
    editor.selections = updatedSelections;
  } else {
    // 新しいカーソル位置を適用
    editor.selections = newSelections as vscode.Selection[];
  }
}
