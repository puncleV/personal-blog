module.exports = {
  extends: [
    "airbnb-base",
    "plugin:vue/recommended",
    "eslint:recommended",
    "prettier/vue",
    "plugin:prettier/recommended"
  ],
  parserOptions: {
    parser: "babel-eslint"
  },
  rules: {
    "arrow-parens": [2, "as-needed"],
    "class-methods-use-this": "off",
    "no-console": ["error", { "allow": ["warn", "error", "info", "time", "timeEnd"] }],
    "max-len": ["error", { "code": 120 }],
    "import/prefer-default-export": "off",
    "no-case-declarations": "off",
    "no-await-in-loop": "off",
    "prettier/prettier": "error",
    "curly": [2, "all"],
    'import/no-unresolved': 0,
    'import/extensions': 0,
  },
  env: {
    browser: true
  },
};
