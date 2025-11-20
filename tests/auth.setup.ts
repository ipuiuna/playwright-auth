import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';

setup('Setup for authentication tests', async ({ page, context }) => {
  console.log(">> BASE_URL:", process.env.BASE_URL);
  console.log(">> SAUCE_USERNAME:", process.env.SAUCE_USERNAME);
  console.log(">> SAUCE_PASSWORD:", process.env.SAUCE_PASSWORD);
  const loginPage = new LoginPage(page);
  const authFile = '.auth/auth.json';

  await loginPage.goto();
  await loginPage.login(
    process.env.SAUCE_USERNAME!,
    process.env.SAUCE_PASSWORD!
  );

  await context.storageState({ path: authFile });
});



