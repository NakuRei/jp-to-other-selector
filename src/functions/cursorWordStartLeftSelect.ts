import * as vscode from 'vscode';

import { moveCursorToPreviousBoundaryWithSelection } from './moveCursorToPreviousBoundaryWithSelection';

export async function cursorWordStartLeftSelect(): Promise<void> {
  try {
    await moveCursorToPreviousBoundaryWithSelection();
  } catch (error: unknown) {
    vscode.window.showErrorMessage(
      `Failed to move cursor to previous boundary with selection: ${
        String(error)}`,
    );
  }
}
