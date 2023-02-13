module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'standard-with-typescript',
    'prettier',
    'plugin:storybook/recommended',
    'next/core-web-vitals',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: './tsconfig.json',
  },
  plugins: ['react', '@typescript-eslint', 'import', 'unused-imports'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'unused-imports/no-unused-imports': 'error',
    '@typescript-eslint/prefer-optional-chain': 'warn',
    semi: ['error', 'never'],
    'require-jsdoc': ['off'],
    'import/order': [
      'error',
      {
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
        },
      },
    ],
  },
}
