module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2018,
  },
  extends: [
    "eslint:recommended",
    "google",
  ],
  rules: {
    "quotes": ["error", "double"],
    "indent": ["error", 2],
    "comma-dangle": ["error", "always-multiline"],
    "require-jsdoc": "off",
    "max-len": ["error", {"code": 120}],
  },
};
