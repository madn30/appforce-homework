module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    node: true,
    'es6': true,
  },
  plugins: [
    '@typescript-eslint',

  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    // 'max-len': ['error', { 'code': 140 }],
    // 'no-console': ['warn',{ 'allow': ['clear', 'info', 'error', 'dir', 'trace', 'log']}],
    // 'no-console': ['error', { allow: ['warn', 'error']}],
    // 'no-console': 'off',
    // 'camelcase': 'warn',
    'new-parens': ['error', 'always'],
    '@typescript-eslint/no-explicit-any': 'off',
    'no-bitwise': 'error',
    'no-multiple-empty-lines': ['error', { 'max': 1, 'maxEOF': 0 }],
    'no-multi-spaces': ['error', { ignoreEOLComments: false }],
    'keyword-spacing': ['error', { 'before': true, 'after': true }],
    'object-curly-spacing': ['error', 'always', { 'objectsInObjects': false, 'arraysInObjects': false }],
    'array-bracket-spacing': ['error', 'never'],
    'space-infix-ops': ['error', { 'int32Hint': false }],
    'newline-after-var': ['error', 'always'],
    'no-trailing-spaces': 'error',
    'newline-before-return': 'error',
    'indent': ['error', 'tab', { 'SwitchCase': 1 }],
    'eol-last': ['error', 'always'],
    'arrow-spacing': 'error',
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'directive', next: '*' },
      { blankLine: 'always', prev: '*', next: 'break' },
      { blankLine: 'always', prev: ['function', 'if', 'for', 'while', 'try', 'switch'], next: '*' },
      { blankLine: 'always', prev: 'import', next: '*' },
      { blankLine: 'any', prev: 'import', next: 'import' },
      { blankLine: 'any', prev: 'directive', next: 'directive' },
      { blankLine: 'always', prev: ['case', 'default'], next: '*' },
    ],
    'semi': ['error', 'always', { 'omitLastInOneLineBlock': true }],
    'comma-dangle': ['error', 'always-multiline'],
    'prefer-arrow-callback': 'error',
    'arrow-body-style': ['error', 'as-needed'],
    'prefer-spread': 'error',
    'no-unneeded-ternary': 'error',
    'multiline-ternary': ['error', 'always-multiline'],
    'template-curly-spacing': ['error', 'always'],
    '@typescript-eslint/no-empty-function': ['off'],
    'quotes': ['error', 'single'],
    'jsx-quotes': ['error', 'prefer-double'],
    'space-before-function-paren': 'error',
    'key-spacing': ['error', { 'beforeColon': false }],
  },
};
