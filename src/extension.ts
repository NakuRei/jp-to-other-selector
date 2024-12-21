/*
 * The module 'vscode' contains the VS Code extensibility API
 * Import the module and reference it with the alias vscode in your code below
 */
import * as vscode from 'vscode';

async function moveCursorToNextWord(): Promise<void> {
  await vscode.commands.executeCommand('cursorWordRight');
}

async function moveCursorToPreviousWord(): Promise<void> {
  await vscode.commands.executeCommand('cursorWordLeft');
}

async function moveCursorRight(): Promise<void> {
  try {
    vscode.window.showInformationMessage('Move Right!');
    await moveCursorToNextWord();
  } catch (error: unknown) {
    vscode.window.showErrorMessage(
      `Failed to move cursor right: ${String(error)}`,
    );
  }
}

async function moveCursorLeft(): Promise<void> {
  try {
    vscode.window.showInformationMessage('Move Left!');
    await moveCursorToPreviousWord();
  } catch (error: unknown) {
    vscode.window.showErrorMessage(
      `Failed to move cursor left: ${String(error)}`,
    );
  }
}

/*
 * This method is called when your extension is activated
 * Your extension is activated the very first time the command is executed
 */
export function activate(context: vscode.ExtensionContext): void {
  /*
   * Use the console to output diagnostic information (console.log)
   * and errors (console.error)
   * This line of code will only be executed once
   * when your extension is activated
   */
  console.log(
    'Congratulations, your extension "jp-to-other-selector" is now active!',
  );

  /*
   * The command has been defined in the package.json file
   * Now provide the implementation of the command with registerCommand
   * The commandId parameter must match the command field in package.json
   */
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'jp-to-other-selector.moveCursorRight', moveCursorRight,
    ),
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'jp-to-other-selector.moveCursorLeft', moveCursorLeft,
    ),
  );
}
