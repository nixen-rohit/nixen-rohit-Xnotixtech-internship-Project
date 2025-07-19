/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:tailwindcss/recommended',
  ],
  plugins: ['react', '@typescript-eslint', 'tailwindcss'],
  rules: {
    // Disable all Tailwind warnings
    'tailwindcss/classnames-order': 'off',
    'tailwindcss/enforces-shorthand': 'off',
    'tailwindcss/no-custom-classname': 'off',
    'tailwindcss/no-contradicting-classname': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
};
