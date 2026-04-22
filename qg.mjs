import { defaultChartsConfig, defineConfig } from "allure";



export default defineConfig({
  name: "Allure Report",
  output: "./allure-report",
  historyPath: "./history.jsonl",
  qualityGate: {
  rules: [
    {
     id: "20 tests failed",
      maxFailures: 20,
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
