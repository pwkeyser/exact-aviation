module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    '@nuxtjs',
    // 'plugin:vue/essential',
    // 'eslint:recommended',
    'prettier/vue',
    // 'plugin:prettier/recommended',
    'standard'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'generator-star-spacing': 'off',
    semi: [2, 'never'],
    'vue/max-attributes-per-line': 'off',
    'prettier/prettier': ['error', { semi: false }],
    'no-console': 'off',
    'arrow-parens': 'off',
    'one-var': 'off',

    'import/first': 'off',
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',
    'prefer-promise-reject-errors': 'off',

    'space-before-function-paren': 0,
    indent: 'off',
    'eol-last': 2,
  },
  globals: {
    $nuxt: true,
  },
}
