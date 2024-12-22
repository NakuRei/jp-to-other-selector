import * as vscode from 'vscode';

import { moveCursorToPreviousWord } from './moveCursorToPreviousWord';

export async function moveCursorLeft(): Promise<void> {
  try {
    vscode.window.showInformationMessage('Move Left!');
    await moveCursorToPreviousWord();
  } catch (error: unknown) {
    vscode.window.showErrorMessage(
      `Failed to move cursor left: ${String(error)}`,
    );
  }
}
