export default [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.test.js", "**/*_test.js", "**/*Test.js"],
    languageOptions: {
      ecmaVersion: 2021,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        describe: "readonly",
        it: "readonly",
        test: "readonly",
        expect: "readonly",
        afterEach: "readonly",
        beforeEach: "readonly",
      },
    },
    plugins: {
      react: {
        version: "detect", 
      },
    },
  },
];