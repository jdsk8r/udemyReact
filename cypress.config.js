const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "http://localhost:3000",
    pageLoadTimeout: 20000,
    requestTimeout: 5000,
    defaultCommandTimeout: 20000,
    retries: 1,
    specPattern: "cypress/e2e/**/*.spec.js",
  },
});
