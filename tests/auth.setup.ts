import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import path from 'path';

const STORAGE_PATH = path.join(__dirname, '../.auth/auth.json');

setup('Setup for authentication tests', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(
    process.env.SAUCE_USERNAME!,
    process.env.SAUCE_PASSWORD!
  );
  await page.context().storageState({ path: STORAGE_PATH });
});

