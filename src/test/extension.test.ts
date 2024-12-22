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
  // 新しいエディタを開く
  const document = await vscode.workspace.openTextDocument({
    content: text,
    language: 'plaintext',
  });
  const editor = await vscode.window.showTextDocument(document);
  editor.selection = new vscode.Selection(position, position);
  return editor;
}

// eslint-disable-next-line max-lines-per-function
suite('Extension Test Suite', () => {
  vscode.window.showInformationMessage('Start all tests.');

  test('cursorWordEndRight should move the cursor to the right by one word',
    async() => {
      const TEST_CASES = [
        { text: 'test word',
          position: new vscode.Position(0, 0),
          expected: new vscode.Position(0, 4) },
        { text: 'test word',
          position: new vscode.Position(0, 4),
          expected: new vscode.Position(0, 9) },
        { text: 'Windowsマシン',
          position: new vscode.Position(0, 0),
          expected: new vscode.Position(0, 7) },
        { text: 'PCはLinuxです',
          position: new vscode.Position(0, 3),
          expected: new vscode.Position(0, 8) },
      ];
      for (const testCase of TEST_CASES) {
        // eslint-disable-next-line no-await-in-loop
        const editor = await setupEditor(
          testCase.text,
          testCase.position,
        );
        // eslint-disable-next-line no-await-in-loop
        await vscode.commands.executeCommand(
          'jp-to-other-selector.cursorWordEndRight',
        );
        assert.strictEqual(
          editor.selection.active.character,
          testCase.expected.character,
        );
        assert.strictEqual(
          editor.selection.active.line,
          testCase.expected.line,
        );
      }
    });

  test('cursorWordStartLeft should move the cursor to the left by one word',
    async() => {
      const TEST_CASES = [
        { text: 'test word',
          position: new vscode.Position(0, 9),
          expected: new vscode.Position(0, 5) },
        { text: 'test word',
          position: new vscode.Position(0, 5),
          expected: new vscode.Position(0, 0) },
        { text: 'Windowsマシン',
          position: new vscode.Position(0, 10),
          expected: new vscode.Position(0, 7) },
        { text: 'PCはLinuxです',
          position: new vscode.Position(0, 8),
          expected: new vscode.Position(0, 3) },
      ];
      for (const testCase of TEST_CASES) {
        // eslint-disable-next-line no-await-in-loop
        const editor = await setupEditor(
          testCase.text,
          testCase.position,
        );
        // eslint-disable-next-line no-await-in-loop
        await vscode.commands.executeCommand(
          'jp-to-other-selector.cursorWordStartLeft',
        );
        assert.strictEqual(
          editor.selection.active.character,
          testCase.expected.character,
        );
        assert.strictEqual(
          editor.selection.active.line,
          testCase.expected.line,
        );
      }
    });

  test('cursorWordEndRightSelect '
    + 'should move the cursor to the next boundary with selection',
  async() => {
    const TEST_CASES = [
      { text: 'test word',
        position: new vscode.Position(0, 0),
        expected: {
          active: new vscode.Position(0, 4),
          anchor: new vscode.Position(0, 0),
        } },
      { text: 'test word',
        position: new vscode.Position(0, 4),
        expected: {
          active: new vscode.Position(0, 9),
          anchor: new vscode.Position(0, 4),
        } },
      { text: 'Windowsマシン',
        position: new vscode.Position(0, 0),
        expected: {
          active: new vscode.Position(0, 7),
          anchor: new vscode.Position(0, 0),
        } },
      { text: 'PCはLinuxです',
        position: new vscode.Position(0, 3),
        expected: {
          active: new vscode.Position(0, 8),
          anchor: new vscode.Position(0, 3),
        } },
    ];
    for (const testCase of TEST_CASES) {
      // eslint-disable-next-line no-await-in-loop
      const editor = await setupEditor(
        testCase.text,
        testCase.position,
      );
        // eslint-disable-next-line no-await-in-loop
      await vscode.commands.executeCommand(
        'jp-to-other-selector.cursorWordEndRightSelect',
      );
      assert.strictEqual(
        editor.selection.active.isEqual(testCase.expected.active), true,
      );
      assert.strictEqual(
        editor.selection.anchor.isEqual(testCase.expected.anchor), true,
      );
    }
  });

  test('cursorWordStartLeftSelect '
    + 'should move the cursor to the previous boundary with selection',
  async() => {
    const TEST_CASES = [
      { text: 'test word',
        position: new vscode.Position(0, 9),
        expected: {
          active: new vscode.Position(0, 5),
          anchor: new vscode.Position(0, 9),
        } },
      { text: 'test word',
        position: new vscode.Position(0, 5),
        expected: {
          active: new vscode.Position(0, 0),
          anchor: new vscode.Position(0, 5),
        } },
      { text: 'Windowsマシン',
        position: new vscode.Position(0, 10),
        expected: {
          active: new vscode.Position(0, 7),
          anchor: new vscode.Position(0, 10),
        } },
      { text: 'PCはLinuxです',
        position: new vscode.Position(0, 8),
        expected: {
          active: new vscode.Position(0, 3),
          anchor: new vscode.Position(0, 8),
        } },
    ];
    for (const testCase of TEST_CASES) {
      // eslint-disable-next-line no-await-in-loop
      const editor = await setupEditor(
        testCase.text,
        testCase.position,
      );
        // eslint-disable-next-line no-await-in-loop
      await vscode.commands.executeCommand(
        'jp-to-other-selector.cursorWordStartLeftSelect',
      );
      assert.strictEqual(
        editor.selection.active.isEqual(testCase.expected.active), true,
      );
      assert.strictEqual(
        editor.selection.anchor.isEqual(testCase.expected.anchor), true,
      );
    }
  });
});
