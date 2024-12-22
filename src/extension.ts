/*
 * The module 'vscode' contains the VS Code extensibility API
 * Import the module and reference it with the alias vscode in your code below
 */
import * as vscode from 'vscode';

import { cursorWordEndRight } from './functions/cursorWordEndRight';
import { cursorWordStartLeft } from './functions/cursorWordStartLeft';
import { cursorWordEndRightSelect } from './functions/cursorWordEndRightSelect';
import { cursorWordStartLeftSelect } from './functions/cursorWordStartLeftSelect';

/*
 * This method is called when your extension is activated
 * Your extension is activated the very first time the command is executed
 */
export function activate(context: vscode.ExtensionContext): void {
  /*
   * The command has been defined in the package.json file
   * Now provide the implementation of the command with registerCommand
   * The commandId parameter must match the command field in package.json
   */
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'jp-to-other-selector.cursorWordEndRight',
      cursorWordEndRight,
    ),
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'jp-to-other-selector.cursorWordStartLeft',
      cursorWordStartLeft,
    ),
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'jp-to-other-selector.cursorWordEndRightSelect',
      cursorWordEndRightSelect,
    ),
  );
  context.subscriptions.push(
    vscode.commands.registerCommand(
      'jp-to-other-selector.cursorWordStartLeftSelect',
      cursorWordStartLeftSelect,
    ),
  );
}
