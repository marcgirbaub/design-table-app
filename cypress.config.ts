/* eslint-disable @typescript-eslint/no-empty-function */
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},
    baseUrl: "http://localhost:3000",
    experimentalRunAllSpecs: true,
    chromeWebSecurity: false,
  },
});
