require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  env: {
    browser: true,
    es2020: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', '@rushstack/eslint-config/profile/web-app'],
  overrides: [
    {
      env: {
        node: true
      },
      files: ['.eslintrc.js'],
      extends: ['eslint:recommended'],
      parserOptions: {
        project: null
      }
    }
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json']
  },
  plugins: ['react'],
  rules: {}
};
