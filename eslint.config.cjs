const importPlugin = require('eslint-plugin-import');
const prettier = require('eslint-config-prettier');
const tsParser = require('@typescript-eslint/parser');
const tsPlugin = require('@typescript-eslint/eslint-plugin');

module.exports = [
  { ignores: ['node_modules/**', 'dist/**', 'build/**', 'coverage/**'] },

  // JS
  {
    files: ['**/*.{js,mjs,cjs}'],
    languageOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    plugins: { import: importPlugin },
    rules: {
      'import/order': ['warn', { 'newlines-between': 'always' }],
    },
  },

  // TS
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      ecmaVersion: 'latest',
      sourceType: 'module',
    },
    plugins: { import: importPlugin, '@typescript-eslint': tsPlugin },
    rules: {
      'import/order': ['warn', { 'newlines-between': 'always' }],
    },
  },

  prettier,
];
