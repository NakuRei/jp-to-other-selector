import * as vscode from 'vscode';

import { deleteNextBoundaryWord } from './deleteNextBoundaryWord';

export function deleteWordEndRight(): void {
  try {
    deleteNextBoundaryWord();
  } catch (error: unknown) {
    vscode.window.showErrorMessage(
      `Failed to delete word end right: ${String(error)}`,
    );
  }
}
