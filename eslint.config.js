import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginReactHooks from 'eslint-plugin-react-hooks';
import pluginJsxA11y from 'eslint-plugin-jsx-a11y';
import pluginAstro from 'eslint-plugin-astro';
import configPrettier from 'eslint-config-prettier';

export default tseslint.config(
  {
    // Base configuration for all files
    linterOptions: {
      // This is equivalent to 'root: true' in the old config
      // It stops ESLint from looking for config files in parent directories
      noInlineConfig: false, // Allow inline comments like /* eslint-disable */
      reportUnusedDisableDirectives: 'warn',
    },
    ignores: [
      'dist/',
      '.astro/',
      'node_modules/',
      'public/',
      '*.d.ts',
      // Add any other files/directories you want to ignore from .eslintignore
      'tests/output/',
      'playwright-report/',
      'test-results/',
      '.env',
      '.env.local',
      '.env.production',
      '.cache/',
      '.parcel-cache/',
      '.DS_Store',
      'Thumbs.db',
      '*.log',
      'npm-debug.log*',
      'yarn-debug.log*',
      'yarn-error.log*',
      '.github/',
      '*.config.js',
    ],
  },
  pluginJs.configs.recommended, // Equivalent to 'eslint:recommended'
  ...tseslint.configs.recommended, // Equivalent to '@typescript-eslint/recommended'
  {
    // General settings for JS/TS/JSX/TSX files
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      react: pluginReact,
      'react-hooks': pluginReactHooks,
      'jsx-a11y': pluginJsxA11y,
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      // TypeScript specific rules
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/prefer-const': 'error',

      // React specific rules
      'react/react-in-jsx-scope': 'off', // Not needed in React 17+
      'react/prop-types': 'off', // Using TypeScript for prop validation
      'react/no-unescaped-entities': 'warn',

      // General rules
      'no-console': 'warn',
      'no-debugger': 'error',
      'prefer-const': 'error',
      'no-var': 'error',

      // Accessibility rules
      'jsx-a11y/alt-text': 'error',
      'jsx-a11y/anchor-is-valid': 'warn',
      'jsx-a11y/click-events-have-key-events': 'warn',
      'jsx-a11y/no-static-element-interactions': 'warn',
    },
  },
  {
    // Configuration for Astro files
    files: ['**/*.astro'],
    ...pluginAstro.configs.recommended,
    languageOptions: {
      parser: pluginAstro.parser,
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
    },
    rules: {
      // Disable some rules that don't make sense in Astro files
      'react/jsx-filename-extension': 'off',
      'react/no-unknown-property': 'off',
    },
  },
  {
    // Configuration for test files
    files: ['**/*.test.{js,ts,tsx}', '**/*.spec.{js,ts,tsx}', 'tests/**/*'],
    languageOptions: {
      globals: {
        ...globals.jest, // Equivalent to 'env.jest: true'
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'no-console': 'off',
    },
  },
  {
    // Configuration for config files
    files: ['*.config.{js,ts}', 'eslint.config.js'], // Note: changed from .eslintrc.js to eslint.config.js
    languageOptions: {
      globals: {
        ...globals.node, // Equivalent to 'env.node: true'
      },
    },
    rules: {
      '@typescript-eslint/no-var-requires': 'off',
      'no-console': 'off',
    },
  },
  configPrettier // Equivalent to 'prettier' in extends
);