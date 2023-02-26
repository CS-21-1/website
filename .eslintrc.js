module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false
  },
  extends: [
    '@nuxtjs',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  // add your custom rules here
  rules: {
    "indent": 0,
    "quotes": 0,
    "eol-last": 0,
    "space-before-function-paren": 0,
    "vue/multi-word-component-names": 0,
    "vue/no-reserved-component-names": 0,
    "comma-dangle": 0,
    "no-trailing-spaces": 0,
    "vue/max-attributes-per-line": 0,
    "semi": 0
  }
}
