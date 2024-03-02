// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const { defineBddConfig } = require('playwright-bdd');
import dotenv from 'dotenv';
import path from 'path';

let testDir;
let timeoutVal = 15 * 60 * 1000;

if (process.env.testType && process.env.testType.toLowerCase() == "smoke") {
  testDir = defineBddConfig({
    paths: ['smokeFeatures/**/*.{feature,feature.md}'],
    require: ['support/step_definitions/**/*.js']
  });
  timeoutVal = 5 * 60 * 1000;
}
else {
  testDir = defineBddConfig({
    paths: ['smoke-features/**/*.{feature,feature.md}'],
    require: ['support/step_definitions/**/*.js']
  });
}

const environment = process.env.runEnv ? process.env.runEnv.trim() : "qa";
dotenv.config({ path: path.resolve(__dirname, "env_files", `${environment?.toLowerCase()}.env`) });

const screenshotValue = (process.env.testType && process.env.testType.toLowerCase() == "flagler") ? "on" : "only-on-failure";
const videoValue = (process.env.testType && process.env.testType.toLowerCase() == "smoke") ? "retain-on-failure" : "on";

module.exports = defineConfig({
  timeout: timeoutVal,
  expect: {
    timeout: 80 * 1000
  },
  testDir,
  fullyParallel: process.env.fullyParallel == "false" ? false : true,
  
  forbidOnly: !!process.env.CI,
 
  retries: process.env.CI ? 2 : 0,
  
  workers: process.env.CI ? 9 : undefined,
  
  reporter: [['html', { open: 'never' }],
  ['junit', { outputFile: 'junit-reports/results.xml' }],
  ['line'],
  ['allure-playwright', {
    detail: true,
    outputFolder: "allure-results",
    suiteTitle: false,
    environmentInfo: {
      E2E_NODE_VERSION: process.version,
      E2E_OS: process.platform,
      E2E_RUNENV: environment
    },
  },]],
  use: {
   
    actionTimeout: 40 * 1000,
    navigationTimeout: 2 * 60 * 1000,
    trace: "off",
    screenshot: screenshotValue,
    video: videoValue
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    }

   
  ],
});

