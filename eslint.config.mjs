// eslint.config.mjs

import vuePlugin from 'eslint-plugin-vue'
import vueParser from 'vue-eslint-parser'
import prettier from 'eslint-config-prettier'
import tsPlugin from '@typescript-eslint/eslint-plugin'
import tsParser from '@typescript-eslint/parser'
import requireRefGeneric from './eslint-rules/require-ref-generic.js'

export default [
  { ignores: ['**/node_modules/**', '**/release/**', '**/out/**', '**/*.d.ts'] },
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      '@yeesha': {
        rules: { 'require-ref-generic': requireRefGeneric }
      }
    },
    rules: {
      ...tsPlugin.configs.recommended.rules,

      // 'no-restricted-syntax': [
      //   'error',
      //   {
      //     selector: 'ConditionalExpression',
      //     message: 'Ternary operators (? :) are forbidden in script code. They are allowed in templates.'
      //   }
      // ],

      '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: false }],
      '@typescript-eslint/array-type': ['error', { default: 'generic', readonly: 'generic' }],
      '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'angle-bracket' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      'func-style': ['error', 'expression', { allowArrowFunctions: true }],
      'func-names': ['error', 'always'],
      'func-name-matching': ['error', 'always'],

      '@yeesha/require-ref-generic': 'error'
    }
  },

  {
    files: ['**/*.vue'],
    languageOptions: {
      parser: vueParser,
      parserOptions: {
        parser: tsParser,
        ecmaVersion: 'latest',
        sourceType: 'module',
        extraFileExtensions: ['.vue']
      }
    },
    plugins: {
      vue: vuePlugin,
      '@typescript-eslint': tsPlugin,
      '@yeesha': {
        rules: { 'require-ref-generic': requireRefGeneric }
      }
    },
    rules: {
      ...vuePlugin.configs['flat/recommended'].rules,
      ...tsPlugin.configs.recommended.rules,

      // 'no-restricted-syntax': [
      //   'error',
      //   {
      //     selector: 'Program ConditionalExpression',
      //     message: 'Ternary operators (? :) are forbidden in script code. They are allowed in templates.'
      //   }
      // ],

      '@typescript-eslint/explicit-function-return-type': ['error', { allowExpressions: false }],
      '@typescript-eslint/array-type': ['error', { default: 'generic', readonly: 'generic' }],
      '@typescript-eslint/consistent-type-assertions': ['error', { assertionStyle: 'angle-bracket' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],

      'func-style': ['error', 'expression', { allowArrowFunctions: true }],
      'func-names': ['error', 'always'],
      'func-name-matching': ['error', 'always'],

      'vue/require-default-prop': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/valid-template-root': 'off',
      'vue/attribute-hyphenation': ['error', 'always'],

      '@yeesha/require-ref-generic': 'error'
    }
  },

  prettier,

  {
    files: ['**/*.{ts,tsx,vue,js,jsx}'],
    rules: {
      'max-len': [
        'warn',
        {
          code: 120,
          ignoreComments: true,
          ignorePattern: 'class="[^"]+"'
        }
      ],
      'line-comment-position': ['warn', { position: 'above' }],
      'function-paren-newline': ['error', 'multiline']
    }
  }
]
