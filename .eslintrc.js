module.exports = {
  plugins: ['@typescript-eslint'],
  // Prerequisite `eslint-plugin-vue`, being extended, sets
  // root property `parser` to `'vue-eslint-parser'`, which, for code parsing,
  // in turn delegates to the parser, specified in `parserOptions.parser`:
  // https://github.com/vuejs/eslint-plugin-vue#what-is-the-use-the-latest-vue-eslint-parser-error
  parserOptions: {
    parser: require.resolve('@typescript-eslint/parser'),
    extraFileExtensions: ['.vue'],
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 7,
    sourceType: "module"    
  },
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/eslint-recommended'
  ],
  overrides: [{
    files: ['*.ts', '*.tsx', '*.scss'],
    rules: {
      // The core 'no-unused-vars' rules (in the eslint:recommeded ruleset)
      // does not work with type definitions
      'no-unused-vars': 'off',
      "indent": ["error", 2]
    }
  }]
}