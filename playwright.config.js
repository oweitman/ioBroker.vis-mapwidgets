// @ts-check
'use strict';

const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './test/frontend',
    timeout: 30000,
    reporter: [['list']],
    use: {
        ...devices['Desktop Chrome'],
        actionTimeout: 10000,
        trace: 'retain-on-failure',
    },
});
