import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import path from 'path';

setup('Setup for authentication tests', async ({ page, context }) => {
  const loginPage = new LoginPage(page);
  const authFile = path.join(__dirname, '../playwright-auth/.auth/auth.json');

  await loginPage.goto();
  await loginPage.login(
    process.env.SAUCE_USERNAME!,
    process.env.SAUCE_PASSWORD!
  );
  await context.storageState({ path: authFile });
});
