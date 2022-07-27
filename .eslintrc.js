module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:vue/vue3-essential',
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  rules: {
    "vue/multi-word-component-names": "off",
    "import/extensions": [2, "never", { "web.js": "never", "json": "never" }],
    "import/no-extraneous-dependencies": [2, { "devDependencies": true }],
    "import/no-unresolved": [2, { "ignore": ["antd-mobile"] }],
  },
};
