import * as vscode from 'vscode';

import { moveCursorToPreviousBoundary } from './moveCursorToPreviousBoundary';

export async function cursorWordStartLeft(): Promise<void> {
  try {
    await moveCursorToPreviousBoundary();
  } catch (error: unknown) {
    vscode.window.showErrorMessage(
      `Failed to move cursor left: ${String(error)}`,
    );
  }
}
