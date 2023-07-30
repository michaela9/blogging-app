module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
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
    "formatjs",
  ],
  extends: [
    "eslint:recommended",
    "next",
    "next/core-web-vitals",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:chai-friendly/recommended",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "prettier",
  ],
  settings: {
    typescript: true,
    node: true,
  },
  rules: {
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
    "@typescript-eslint/no-base-to-string": [
      "error",
      {
        ignoredTypeNames: ["YearMonth"],
      },
    ],
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
    // https://formatjs.io/docs/tooling/linter
    "formatjs/enforce-description": "off",
    "formatjs/enforce-default-message": ["error", "literal"],
    "formatjs/enforce-placeholders": "error",
    "formatjs/enforce-id": [
      "off",
      {
        idInterpolationPattern: "[sha512:contenthash:base64:6]",
        idWhitelist: ["^(front|admin)..*"],
      },
    ],
    "formatjs/enforce-plural-rules": [
      "error",
      {
        one: true,
        other: true,
        zero: false,
      },
    ],
    "formatjs/no-camel-case": "error",
    "formatjs/no-emoji": "error",
    "formatjs/no-multiple-plurals": "error",
    "formatjs/no-multiple-whitespaces": "error",
    "formatjs/no-offset": "error",
    "formatjs/no-id": "off",
    "formatjs/no-literal-string-in-jsx": [
      "off",
      {
        // Include or exclude additional prop checks (merged with the default checks)
        props: {
          include: [
            // check aria attributes that the screen reader announces.
            ["*", "aria-{label,description,details,errormessage}"],
            // check placeholder and title attribute of all native DOM elements.
            ["[a-z]*([a-z0-9])", "(placeholder|title)"],
            // check alt attribute of the img tag.
            ["img", "alt"],
          ],
          // Exclude will always override include.
          exclude: [
            // do not check `message` of the `Foo` tag.
            ["Foo", "message"],
            // do not check aria-label and aria-description of `Bar` tag.
            ["Bar", "aria-{label,description}"],
          ],
        },
      },
    ],
    "formatjs/no-complex-selectors": [
      "error",
      {
        limit: 10,
      },
    ],

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
          ["\\u0000$", "^@/type"],
          // packages
          ["^@?\\w"],
          ["^@/config", "^@/content"],
          ["^@/hooks", "^@/utils"],
          ["^@/components"],
          ["^@/containers"],
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
