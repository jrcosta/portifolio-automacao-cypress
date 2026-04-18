const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://sauce-demo.myshopify.com',
    specPattern: 'cypress/e2e/**/*.cy.js',
    supportFile: 'cypress/support/e2e.js',
    video: true,
    screenshotOnRunFailure: true,
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 60000,
  },
  viewportWidth: 1366,
  viewportHeight: 768,
  chromeWebSecurity: false,
  retries: {
    runMode: 1,
    openMode: 0,
  },
});
