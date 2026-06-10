import { defaultChartsConfig, defineConfig } from "allure";



export default defineConfig({
  name: "Allure Report",
  output: "./allure-report",
  historyPath: "./history.jsonl",
  qualityGate: {
  rules: [
    {
     id: "10 tests failed",
      maxFailures: 10,
      fastFail: true,
    }
  ],
},
  plugins: {
    testops: {
      options: { },
    },
  },
  variables: { },
  environments: {},
});
