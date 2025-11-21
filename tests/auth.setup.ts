import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

setup('Setup for authentication tests', async ({ page, context }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(
    process.env.SAUCE_USERNAME!,
    process.env.SAUCE_PASSWORD!
  );
  await context.storageState({ path: '.auth/auth.json' });
});
