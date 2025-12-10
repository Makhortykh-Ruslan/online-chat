import { defineConfig, globalIgnores } from 'eslint/config';
import nextVitals from 'eslint-config-next/core-web-vitals';
import nextTs from 'eslint-config-next/typescript';
import prettier from 'eslint-config-prettier/flat';
import eslintPluginPrettier from 'eslint-plugin-prettier';
import simpleImportSortPlugin from 'eslint-plugin-simple-import-sort';
import unusedImports from 'eslint-plugin-unused-imports';

import prettierConfig from './prettier.config.js';

export default defineConfig([
  ...nextVitals,
  ...nextTs,
  {
    plugins: {
      prettier: eslintPluginPrettier,
      'simple-import-sort': simpleImportSortPlugin,
      'unused-imports': unusedImports,
    },
    rules: {
      // --- Prettier ---
      'prettier/prettier': ['error', prettierConfig],

      // --- Unused imports ---
      '@typescript-eslint/no-unused-vars': 'off',
      'unused-imports/no-unused-imports': 'error',
      'unused-imports/no-unused-vars': [
        'warn',
        { vars: 'all', varsIgnorePattern: '^_', argsIgnorePattern: '^_' },
      ],

      // --- React ---
      'react/jsx-filename-extension': ['error', { extensions: ['.tsx'] }],
      'react/no-unescaped-entities': 'off',

      // --- Next ---
      '@next/next/no-page-custom-font': 'off',

      // --- TS ---
      '@typescript-eslint/no-explicit-any': 'error',

      // --- JS ---
      'no-console': ['warn', { allow: ['warn', 'error'] }],
      'no-empty': 'error',

      // --- Accessibility ---
      'jsx-a11y/alt-text': 'error',

      // --- Import sorting ---
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',

      // --- Disabled stylistic rules (Prettier handles them) ---
      indent: 'off',
      quotes: 'off',
      'max-len': 'off',
    },
  },

  // Prettier MUST be after your rules
  prettier,

  // Final ignores
  globalIgnores(['.next/**', 'out/**', 'build/**', 'next-env.d.ts']),
]);
