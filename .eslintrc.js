module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint'],
  extends: [
    'plugin:@typescript-eslint/recommended'
  ],
  env: {
    browser: true
  },
  rules: {
    indent: ['error', 2],
    semi: ['error', 'always'],
    '@typescript-eslint/no-var-requires': "off",
    '@typescript-eslint/explicit-module-boundary-types': "off"
  }
};
