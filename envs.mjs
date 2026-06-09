import { defineConfig } from "allure";
import { qualityGateDefaultRules } from "allure/rules";
import { env } from "node:process";

const { ALLURE_SERVICE_ACCESS_TOKEN } = env;

/**
 * @type {import("allure").AllureConfig}
 */
const config = {
  name: "Allure Report 3",
  output: "./out/allure-report",
  plugins: {
    testops: {
      options: { },
    },
  },
  variables: {
    env_variable: "unknown",
  },
  environments: {
    darwin: {
      variables: {
        env_variable: "os",
        env_specific_variable: "foo",
      },
      matcher: ({ labels }) => labels.some(({ name, value }) => name === "os" && value === "darwin"),
    },
    linux: {
      variables: {
        env_variable: "os",
        env_specific_variable: "bar",
      },
      matcher: ({ labels }) => labels.some(({ name, value }) => name === "os" && value === "linux"),
    },
  },
};

export default defineConfig(config);
