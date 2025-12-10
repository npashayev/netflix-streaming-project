import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,

  {
    rules: {
      semi: ["error", "always"],
      "no-extra-semi": "error",
      "no-duplicate-imports": "error",

      "@typescript-eslint/no-unused-vars": [
        "warn",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" }
      ],

      eqeqeq: ["error", "always"],
      "no-console": ["warn", { allow: ["warn", "error"] }],
      "no-debugger": "warn",
      "no-implicit-coercion": "warn",
      "no-return-await": "warn",
      "require-await": "warn",
      "react/jsx-boolean-value": ["warn", "never"],
      "react/self-closing-comp": "warn",
      "no-empty": ["warn", { allowEmptyCatch: true }],
    },
  },

  globalIgnores([
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
]);

export default eslintConfig;