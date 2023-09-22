import { PlaywrightTestConfig, devices } from '@playwright/test'
import { join } from 'node:path';

export default {
  name: 'e2e',
  timeout: 5 * 1000,
  testDir: join(__dirname, '../../src'),
  outputDir: 'test-report',
  updateSnapshots: process.env.UPDATE_SNAPSHOTS ? 'all' : 'none',
  testMatch: '**/*.spec.tsx',
  retries: 1,
  snapshotPathTemplate: '{testDir}/__snapshots__/{testFilePath}/{arg}{ext}',
  use: {
    baseURL: 'http://127.0.0.1:3000',
  },
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
} satisfies PlaywrightTestConfig;

