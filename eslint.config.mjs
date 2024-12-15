import js from '@eslint/js';
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import tseslint from 'typescript-eslint';
import tsParser from "@typescript-eslint/parser";

import myTypescriptConfig from './nakurei-typescript-config.mjs';
import myStylisticConfig from './nakurei-stylistic-config.mjs';

export default tseslint.config(
  {
    files: ["**/*.ts"],
    plugins: {
      "@typescript-eslint": typescriptEslint,
    },
    extends: [
      js.configs.recommended,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      ...myTypescriptConfig,
    ],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
          project: ['./tsconfig.json'],
      },
    },

    rules: {
      "@typescript-eslint/naming-convention": ["warn", {
        selector: "import",
        format: ["camelCase", "PascalCase"],
      }],

      curly: "warn",
      eqeqeq: "warn",
      "no-throw-literal": "warn",
      semi: "warn",

      'max-lines-per-function': ['error', { max: 50 }],
    },
  },
  {
    extends: [...myStylisticConfig],
    files: ['**/*.{js,ts}'],
  },
);
