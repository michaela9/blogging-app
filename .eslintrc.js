module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    jest: true,
  },
  globals: {
    React: true,
    JSX: true,
  },
  parser: "@typescript-eslint/parser",
  parserOptions: { tsconfigRootDir: __dirname, project: true },
  plugins: [
    "@typescript-eslint",
    "import",
    "simple-import-sort",
    "unused-imports",
  ],
  extends: [
    "eslint:recommended",
    "next",
    "next/core-web-vitals",
    "plugin:testing-library/react",
    "plugin:jest-dom/recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:chai-friendly/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "plugin:@typescript-eslint/recommended",
    "prettier",
  ],
  settings: {
    typescript: true,
    node: true,
  },
  rules: {
    "no-empty-function": "off",
    "no-console": "warn",
    "@typescript-eslint/explicit-module-boundary-types": "off",

    "react/display-name": "off",
    "react/jsx-curly-brace-presence": [
      "warn",
      { props: "never", children: "never" },
    ],

    "@next/next/no-img-element": "off",
    "@typescript-eslint/prefer-nullish-coalescing": "off",
    "@typescript-eslint/ban-ts-comment": [
      "error",
      { "ts-expect-error": "allow-with-description" },
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "type"],
    "@typescript-eslint/no-base-to-string": ["error"],
    "@typescript-eslint/consistent-type-imports": "error",
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],

    // ********************************************************************************************************************
    // https://github.com/import-js/eslint-plugin-import

    // ********************************************************************************************************************

    // ********************************************************************************************************************
    //#region  //*=========== Unused Import ===========
    "no-unused-vars": "off",
    "@typescript-eslint/no-unused-vars": "off",
    "unused-imports/no-unused-imports": "warn",
    "unused-imports/no-unused-vars": [
      "warn",
      {
        vars: "all",
        varsIgnorePattern: "^_i_",
        args: "after-used",
        argsIgnorePattern: "^_i_",
      },
    ],
    //#endregion  //*======== Unused Import ===========

    // ********************************************************************************************************************
    //#region  //*=========== Import Sort ===========
    "import/no-duplicates": "error",
    "import/newline-after-import": "error",
    "simple-import-sort/exports": "warn",
    "simple-import-sort/imports": [
      "warn",
      {
        groups: [
          // side effect imports
          ["^\\u0000"],
          ["^.+\\.s?css$"],
          // types
          ["\\u0000$", "^@/types"],
          // packages
          ["^@?\\w"],
          ["^@/config", "^@/content"],
          ["^@/hooks", "^@/utils"],
          ["^@/components"],
          ["^@/containers"],
          ["^@/styles"],
          ["^@/"],
          // relative paths up until 3 level
          [
            "^\\./?$",
            "^\\.(?!/?$)",
            "^\\.\\./?$",
            "^\\.\\.(?!/?$)",
            "^\\.\\./\\.\\./?$",
            "^\\.\\./\\.\\.(?!/?$)",
            "^\\.\\./\\.\\./\\.\\./?$",
            "^\\.\\./\\.\\./\\.\\.(?!/?$)",
          ],
          ["^"],
        ],
      },
    ],
  },
};
