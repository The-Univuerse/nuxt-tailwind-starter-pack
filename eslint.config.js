import { includeIgnoreFile } from "@eslint/compat";
import pluginJs from "@eslint/js";
import stylistic from '@stylistic/eslint-plugin';
import pluginVue from "eslint-plugin-vue";
import globals from "globals";
import path from "node:path";
import { fileURLToPath } from "node:url";
import tseslint from "typescript-eslint";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const gitignorePath = path.resolve(__dirname, ".gitignore");


/** @type {import('eslint').Linter.Config[]} */
export default [
  includeIgnoreFile(gitignorePath),

  { files: ["**/*.{js,mjs,cjs,ts,vue}"] },
  {
    plugins: {
      '@stylistic': stylistic
    }
  },
  { languageOptions: { globals: { ...globals.browser, ...globals.node } } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  { files: ["**/*.vue"], 
    languageOptions: { parserOptions: { parser: tseslint.parser } } },
  {
    rules: {
      '@stylistic/indent': ['error', 2],
      '@stylistic/array-bracket-spacing': ["error"],
      'vue/multi-word-component-names': 'off',
      // ESLint plugin vue
      'vue/block-tag-newline': 'error',
      'vue/component-api-style': 'error',
      'vue/component-name-in-template-casing': [
        'error',
        'PascalCase',
      ],
      'vue/custom-event-name-casing': [
        'error',
        'camelCase',
        {
          ignores: [
            '/^(click):[a-z]+((d)|([A-Z0-9][a-z0-9]+))*([A-Z])?/',
          ],
        },
      ],
      'vue/first-attribute-linebreak': [
        'off',
        {
          singleline: 'beside',
          multiline: 'below',
        },
      ],

      'antfu/top-level-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'max-len': 'off',
      'vue/define-macros-order': 'error',
      'vue/html-comment-content-newline': 'error',
      'vue/html-comment-content-spacing': 'error',
      'vue/html-comment-indent': 'error',
      'vue/match-component-file-name': 'error',
      'vue/no-child-content': 'error',
      'vue/require-default-prop': 'off',
      'vue/no-duplicate-attr-inheritance': 'error',
      'vue/no-empty-component-block': 'error',
      'vue/no-multiple-objects-in-class': 'error',
      'vue/no-reserved-component-names': 'error',
      'vue/no-template-target-blank': 'error',
      'vue/no-useless-mustaches': 'error',
      'vue/no-useless-v-bind': 'error',
      'vue/padding-line-between-blocks': 'error',
      'vue/prefer-separate-static-class': 'error',
      'vue/prefer-true-attribute-shorthand': 'error',
      'vue/v-on-function-call': 'error',
      'vue/no-restricted-class': ['error'],
      'vue/valid-v-slot': [
        'error',
        {
          allowModifiers: true,
        },
      ],

      // -- Extension Rules
      'vue/no-irregular-whitespace': 'error',
      'vue/template-curly-spacing': 'error',
    },
  }
];
