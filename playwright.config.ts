import { defineConfig, devices } from '@playwright/test';
import path from 'path';
import * as dotenv from 'dotenv';

if (!process.env.CI) {
  dotenv.config();
}

const storageStatePath = path.resolve(process.cwd(), '.auth', 'auth.json');

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: [['html'], ['list']],
  use: {
    baseURL: process.env.BASE_URL,
    testIdAttribute: 'data-test',
    trace: 'on-first-retry',
  },
  projects: [
    {
      name: 'setup',
      testMatch: /.*\.setup\.ts/,
      use: { storageState: storageStatePath },
    },
    {
      name: 'authenticated',
      dependencies: ['setup'],
      testMatch: /auth\..*\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: storageStatePath,
      },
    },
    {
      name: 'public',
      testMatch: /(public|no-auth)\..*\.spec\.ts/,
      use: {
        ...devices['Desktop Chrome'],
        storageState: undefined,
      },
    },
  ],
});
