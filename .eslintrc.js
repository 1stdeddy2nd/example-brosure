module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    // add more generic rulesets here, such as:
    // 'eslint:recommended',
    'plugin:vue/vue3-recommended',
    // 'plugin:vue/recommended' // Use this if you are using Vue.js 2.x.
  ],
  rules: {
    "@typescript-eslint/no-var-requires": "off",
    "no-console": "off",
    "no-unused-vars": "warn",
    "vue/multi-word-component-names": "off",
  },
}
