const { defineConfig } = require("cypress");

module.exports = defineConfig({
  viewportWidth: 1920,
  viewportHeight: 1080,
  blockHosts: [
    'www.youtube.com'
  ],
  e2e: {
    baseUrl: "https://developers.intuitivo.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
