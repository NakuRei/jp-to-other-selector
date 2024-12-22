import * as vscode from 'vscode';

import { deletePreviousBoundaryWord } from './deletePreviousBoundaryWord';

export function deleteWordStartLeft(): void {
  try {
    deletePreviousBoundaryWord();
  } catch (error: unknown) {
    vscode.window.showErrorMessage(
      `Failed to delete word start left: ${String(error)}`,
    );
  }
}
