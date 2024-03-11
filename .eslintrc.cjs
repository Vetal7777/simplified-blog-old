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
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          ['UNIQUE', 'SLOT'],
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ],
        alphabetical: false
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
    ],
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
    'vue/component-definition-name-casing': ['error', 'PascalCase']
  }
}
