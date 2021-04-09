module.exports = {
  root: true,

  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true,
    jest: true,
  },

  parser: "@typescript-eslint/parser",

  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
  },

  settings: {
    react: {
      version: "detect",
    },
  },

  plugins: ["filenames", "react", "react-hooks", "prettier"],

  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:import/errors",
    "plugin:import/warnings",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],

  rules: {
    "filenames/match-regex": [2, "^[a-zA-Z.]([A-Z]?[a-z0-9.])+$", true],
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-console": "warn",
    camelcase: [2, { properties: "always" }],
    "no-var": "error",
    "no-unused-vars": "warn",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
  },
};
