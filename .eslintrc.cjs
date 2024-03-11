module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser'
  },
  extends: ['@nuxt/eslint-config', 'plugin:prettier/recommended'],
  plugins: [],
  rules: {
    'no-debugger': 'error',
    'no-console': 'error',
    'vue/require-prop-types': 'error',
    'prettier/prettier': [
      'error',
      {
        plugins: ['prettier-plugin-tailwindcss'],
        semi: false,
        singleQuote: true,
        trailingComma: 'none'
      }
    ],
    'prefer-destructuring': [
      'error',
      {
        array: true,
        object: true
      },
      {
        enforceForRenamedProperties: false
      }
    ]
  }
}
