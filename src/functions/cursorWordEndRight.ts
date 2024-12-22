import * as vscode from 'vscode';

import { moveCursorToNextBoundary } from './moveCursorToNextBoundary';

export async function cursorWordEndRight(): Promise<void> {
  try {
    await moveCursorToNextBoundary();
  } catch (error: unknown) {
    vscode.window.showErrorMessage(
      `Failed to move cursor right: ${String(error)}`,
    );
  }
}
