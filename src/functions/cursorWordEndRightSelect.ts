import * as vscode from 'vscode';

import { moveCursorToNextBoundaryWithSelection } from './moveCursorToNextBoundaryWithSelection';

export async function cursorWordEndRightSelect(): Promise<void> {
  try {
    await moveCursorToNextBoundaryWithSelection();
  } catch (error: unknown) {
    vscode.window.showErrorMessage(
      `Failed to move cursor to next boundary with selection: ${String(error)}`,
    );
  }
}
