import * as vscode from 'vscode';

import { moveCursorToNextWord } from './moveCursorToNextWord';

export async function moveCursorRight(): Promise<void> {
  try {
    vscode.window.showInformationMessage('Move Right!');
    await moveCursorToNextWord();
  } catch (error: unknown) {
    vscode.window.showErrorMessage(
      `Failed to move cursor right: ${String(error)}`,
    );
  }
}
