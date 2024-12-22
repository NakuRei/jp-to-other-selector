import * as vscode from 'vscode';

export async function moveCursorToNextWord(): Promise<void> {
  await vscode.commands.executeCommand('cursorWordRight');
}
