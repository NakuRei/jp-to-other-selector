# jp-to-other-selector README

日本語と他の文字の間にカーソルを移動しやすくするための、[VS Code](https://code.visualstudio.com/)の拡張機能。

## Installation

[VS Code Marketplace](https://marketplace.visualstudio.com/items?itemName=NakuRei.jp-to-other-selector)からインストールできます。

## Description

このVS Code拡張機能は、日本語（ひらがな・カタカナ・漢字のかたまり）と、他の文字（アルファベット・数字・記号）の間を素早く移動するための機能を提供します。

たとえば、以下のようなテキストがあるとします：

```text
VS Codeは、Microsoftが提供するソースコードエディタです。
```

デフォルトのVS Codeでは、`Ctrl + Right`でカーソルを移動すると、以下のようになります：

![Original cursor movement](https://raw.githubusercontent.com/NakuRei/jp-to-other-selector/main/docs/images/example_before.gif)

この拡張機能をインストールすることで、`Ctrl + Right`でカーソルを移動すると、以下のように移動が変わります：

![Improved cursor movement](https://raw.githubusercontent.com/NakuRei/jp-to-other-selector/main/docs/images/example_after.gif)

これだけです。あ、もちろん、逆方向にも移動できますし、選択・削除もできます。

重要なのは、この拡張機能は「日本語を単語に分けることはしない」ということです。日本語の単語を分けたい場合は、[Word Divider](https://github.com/yutotnh/word-divider/tree/main)等の拡張機能を使ったほうが幸せになれます。この拡張機能は、日本語は塊のまま、英語などの他の言語との境目にカーソルを移動できるようにするだけです。

## Features

この拡張機能をインストールすると、自動で以下のキーバインドが変更されます。

| キーバインド(except macOS) | キーバインド(macOS)      | 機能           |
| -------------------------- | ------------------------ | -------------- |
| `Ctrl + Right`             | `Option + Right`         | 次の単語へ移動 |
| `Ctrl+ Left`               | `Option + Left`          | 前の単語へ移動 |
| `Ctrl + Shift + Right`     | `Option + Shift + Right` | 次の単語を選択 |
| `Ctrl + Shift + Left`      | `Option + Shift + Left`  | 前の単語を選択 |
| `Ctrl + Delete`            | `Option + Delete`        | 次の単語を削除 |
| `Ctrl + Backspace`         | `Option + Backspace`     | 前の単語を削除 |

この`単語`の境目に、日本語と他の文字の境目が含まれるよう変更されます。

この拡張機能が提供する機能は、コマンドパレットには表示されません。しかし、これらのアクションはコマンドとして実装されているので、任意のキーの組み合わせを再割り当てすることができます。そのため、デフォルトのキーバインドを上書きしたくない場合は、この拡張機能が提供する上記のキーバインドを変更してください。

## Usage

1. この拡張機能をインストールします

これだけです。インストール後、Featuresに記載したキーバインドのアクションが変更されます。

## Requirements

この拡張機能は、VS Codeのバージョン1.96.2以上で動作します。

## License

(c) 2024 NakuRei

この拡張機能は、MITライセンスの下で公開されています。詳細については、[LICENSE](./LICENSE)を参照してください。
