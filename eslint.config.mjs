/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { fileURLToPath } from 'node:url';
import { dirname } from 'path';

import { FlatCompat } from '@eslint/eslintrc';
import pluginJs from '@eslint/js';
import perfectionist from 'eslint-plugin-perfectionist';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';
import reactPlugin from 'eslint-plugin-react';
import eslintPluginReactCompiler from 'eslint-plugin-react-compiler';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import eslintPluginReactPerf from 'eslint-plugin-react-perf';
import reactRefresh from 'eslint-plugin-react-refresh';
import sonarjs from 'eslint-plugin-sonarjs';
import eslintPluginSortDestructureKeys from 'eslint-plugin-sort-destructure-keys';
import globals from 'globals';
import tseslint from 'typescript-eslint';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const config = [
  {
    files: ['**/*.ts', '**/*.tsx'],
  },

  ...compat.extends('next/core-web-vitals', 'next/typescript'),
  pluginJs.configs.recommended,
  reactPlugin.configs.flat.recommended,
  sonarjs.configs.recommended,
  {
    plugins: {
      'react-refresh': reactRefresh,
      'react-compiler': eslintPluginReactCompiler,
      'sort-destructure-keys': eslintPluginSortDestructureKeys,
      'react-perf': eslintPluginReactPerf,
      'react-hooks': reactHooksPlugin,
      perfectionist,
    },
    rules: {
      'react-compiler/react-compiler': 'error',
      'react-perf/jsx-no-new-function-as-prop': 'error',
      'sort-destructure-keys/sort-destructure-keys': 'error',
    },
    settings: {
      'import/resolver': {
        node: {
          paths: ['src'],
        },
        typescript: {
          project: 'src',
        },
      },
      perfectionist: {
        type: 'line-length',
        partitionByComment: true,
      },
    },
  },
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  {
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        project: true,
        tsconfigRootDir: __dirname,
        extraFileExtensions: ['.mjs'],
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  eslintPluginPrettierRecommended,
  {
    rules: {
      // Eslint rules
      'array-callback-return': 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'no-alert': 'error',
      'no-await-in-loop': 'error',
      'no-console': 'warn',
      'no-else-return': 'error',
      'no-inner-declarations': 'error',
      'no-empty-function': 'error',
      'no-lone-blocks': 'error',
      'no-lonely-if': 'error',
      'no-multi-assign': 'error',
      'no-multi-str': 'error',
      'no-new-wrappers': 'error',
      'no-param-reassign': ['error', { ignorePropertyModificationsFor: ['state'] }],
      'no-plusplus': 'error',
      'no-promise-executor-return': 'error',
      'no-restricted-syntax': ['error', 'ForInStatement'],
      'no-return-assign': 'error',
      'no-self-compare': 'error',
      'no-shadow': 'off',
      'no-undef-init': 'error',
      'no-unmodified-loop-condition': 'error',
      'no-unneeded-ternary': 'error',
      'no-unreachable-loop': 'error',
      'no-unused-vars': 'off',
      'no-useless-computed-key': 'error',
      'no-useless-concat': 'error',
      'no-useless-rename': 'error',
      'no-useless-return': 'error',
      'no-void': 'error',
      'object-shorthand': 'error',
      'prefer-const': 'error',
      'prefer-object-spread': 'error',
      'prefer-template': 'error',
      yoda: 'error',

      // Typescript-eslint rules
      '@typescript-eslint/consistent-type-definitions': ['error', 'type'],
      '@typescript-eslint/consistent-type-exports': 'error',
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/method-signature-style': 'error',
      '@typescript-eslint/no-empty-object-type': ['error', { allowObjectTypes: 'always' }],
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-invalid-void-type': 'off',
      '@typescript-eslint/no-unsafe-call"': 'off',
      '@typescript-eslint/no-misused-promises': [
        'error',
        {
          checksVoidReturn: {
            attributes: false,
          },
        },
      ],
      '@typescript-eslint/no-non-null-assertion': 'off',
      '@typescript-eslint/no-non-null-asserted-optional-chain': 'error',
      '@typescript-eslint/no-require-imports': 'error',
      '@typescript-eslint/no-shadow': 'error',
      '@typescript-eslint/no-unnecessary-type-parameters': 'off',
      '@typescript-eslint/no-dynamic-delete': 'off',
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          ignoreRestSiblings: true,
        },
      ],
      '@typescript-eslint/no-useless-empty-export': 'error',
      '@typescript-eslint/restrict-template-expressions': ['error', { allowNumber: true }],
      '@typescript-eslint/sort-type-constituents': 'off',
      '@typescript-eslint/strict-boolean-expressions': [
        'error',
        { allowNullableBoolean: true, allowNullableObject: true, allowNullableString: true, allowNumber: false },
      ],
      '@typescript-eslint/switch-exhaustiveness-check': 'error',

      // React rules
      'react/hook-use-state': 'error',
      'react/jsx-boolean-value': 'error',
      'react/jsx-curly-brace-presence': 'error',
      'react/jsx-fragments': 'error',
      'react/no-unescaped-entities': ['error', { forbid: ['>', '}'] }],
      'react/no-unknown-property': ['error', { ignore: ['css'] }],
      'react/jsx-no-useless-fragment': 'error',
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/self-closing-comp': ['error', { component: true, html: true }],

      // React-hooks rules
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'error',

      // Sonarjs rules
      'sonarjs/array-constructor': 'error',
      'sonarjs/arrow-function-convention': ['error', { requireParameterParentheses: true }],
      'sonarjs/bool-param-default': 'error',
      'sonarjs/function-return-type': 'off',
      'sonarjs/max-union-size': ['error', { threshold: 5 }],
      'sonarjs/no-array-index-key': 'off',
      'sonarjs/no-duplicate-string': ['error', { ignoreStrings: 'application/json,flat/recommended' }],
      'sonarjs/no-hardcoded-passwords': 'off',
      'sonarjs/no-misused-promises': 'off',
      'sonarjs/no-nested-functions': 'off',
      'sonarjs/no-unknown-property': 'off',
      'sonarjs/no-unused-function-argument': 'error',
      'sonarjs/pseudo-random': 'off',
      'sonarjs/slow-regex': 'off',
      'sonarjs/todo-tag': 'off',

      // Import rules
      'import/consistent-type-specifier-style': ['error', 'prefer-top-level'],
      'import/extensions': ['error', 'never'],
      'import/no-cycle': 'error',
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import/newline-after-import': 'error',

      // Prettier rules
      'prettier/prettier': [
        'error',
        {
          arrowParens: 'always',
          bracketSpacing: true,
        },
      ],

      // Perfectionist rules
      'perfectionist/sort-imports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          newlinesBetween: 'always',
          groups: [
            'builtin',
            'external',
            'internal',
            'parent',
            'sibling',
            'side-effect',
            'side-effect-style',
            'index',
            'object',
            ['external-type', 'builtin-type', 'internal-type', 'parent-type', 'sibling-type', 'index-type'],
            'unknown',
            'style',
          ],
        },
      ],
      'perfectionist/sort-exports': [
        'error',
        {
          type: 'alphabetical',
          order: 'asc',
          ignoreCase: true,
          specialCharacters: 'keep',
          partitionByComment: false,
          partitionByNewLine: false,
          groupKind: 'mixed',
        },
      ],
      'perfectionist/sort-object-types': [
        'error',
        {
          order: 'asc',
          groupKind: 'required-first',
          partitionByNewLine: true,
          groups: ['multiline', 'unknown'],
        },
      ],
      'perfectionist/sort-interfaces': [
        'error',
        {
          order: 'asc',
          groupKind: 'required-first',
          partitionByNewLine: true,
        },
      ],
      'perfectionist/sort-union-types': [
        'error',
        {
          order: 'asc',
          groups: [
            'named',
            'object',
            'conditional',
            'function',
            'import',
            'intersection',
            'keyword',
            'literal',
            'operator',
            'tuple',
            'union',
            'nullish',
          ],
        },
      ],
      'perfectionist/sort-intersection-types': [
        'error',
        {
          order: 'asc',
          groups: [
            'named',
            'object',
            'conditional',
            'function',
            'import',
            'intersection',
            'keyword',
            'literal',
            'operator',
            'tuple',
            'union',
            'nullish',
          ],
        },
      ],
      'perfectionist/sort-jsx-props': [
        'error',
        {
          order: 'asc',
          groups: ['key', 'multiline', 'unknown', 'shorthand', 'callback', 'css', 'dataAttributes'],
          customGroups: { key: 'key', callback: 'on*', css: 'css', dataAttributes: 'data-*' },
        },
      ],
    },
  },
  {
    ignores: ['coverage/', '.next/'],
  },
];

export default config;
