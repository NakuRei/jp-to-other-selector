import * as vscode from 'vscode';

export async function moveCursorToPreviousWord(): Promise<void> {
  await vscode.commands.executeCommand('cursorWordLeft');
}
