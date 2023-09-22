import { PlaywrightTestConfig, devices } from '@playwright/test'

export default {
  name: 'vrt',
  timeout: 5 * 1000,
  testDir: __dirname,
  outputDir: 'test-report',
  updateSnapshots: process.env.UPDATE_SNAPSHOTS === '1' ? 'all' : 'missing',
  testMatch: '**/*.spec.tsx',
  retries: 1,
  snapshotPathTemplate: '{testDir}/__snapshots__/{testFilePath}/{arg}{ext}',
  use: {
    baseURL: 'http://127.0.0.1:6006',
  },
  reporter: [
    ['html', { open: 'never', outputFolder: 'html-report' }],
    ['json', { open: 'never', outputFile: 'json-report/report.json' }],
  ],
  projects: [
    {
      name: 'Desktop Chrome',
      use: {
        ...devices['Desktop Chrome'],
      },
    },
  ],
} satisfies PlaywrightTestConfig;

