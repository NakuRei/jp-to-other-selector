import * as assert from 'assert';

/*
 * You can import and use all API from the 'vscode' module
 * as well as import your extension to test it
 */
import * as vscode from 'vscode';

async function setupEditor(
  text: string,
  position: vscode.Position,
): Promise<vscode.TextEditor> {
  const editor = await vscode.window.showTextDocument(
    vscode.Uri.parse('untitled:test'),
  );
  await editor.edit((editBuilder) => {
    editBuilder.insert(new vscode.Position(0, 0), text);
  });
  editor.selection = new vscode.Selection(position, position);
  return editor;
}

suite('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test('moveCursorRight command should be registered',
    () => {
      vscode.commands.getCommands(true).then((commands) => {
        assert.ok(commands.includes('jp-to-other-selector.moveCursorRight'));
      });
    });

  test('moveCursorLeft command should be registered',
    () => {
      vscode.commands.getCommands(true).then((commands) => {
        assert.ok(commands.includes('jp-to-other-selector.moveCursorLeft'));
      });
    });

  test('moveCursorRight should move the cursor to the right by one word',
    async() => {
      const editor = await setupEditor(
        'test word',
        new vscode.Position(0, 0),
      );
      await vscode.commands.executeCommand(
        'jp-to-other-selector.moveCursorRight',
      );
      // 'test 'の後にカーソルが移動
      assert.strictEqual(editor.selection.active.character, 4);
    });

  test('moveCursorLeft should move the cursor to the left by one word',
    async() => {
      const editor = await setupEditor(
        'test word',
        new vscode.Position(0, 9),
      );
      await vscode.commands.executeCommand(
        'jp-to-other-selector.moveCursorLeft',
      );
      // 'word'の前にカーソルが移動
      assert.strictEqual(editor.selection.active.character, 5);
    });
});
