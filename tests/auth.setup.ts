import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import path from 'path';

const storageStatePath = path.join(process.cwd(), 'storageFile.json');

setup('Setup for authentication tests', async ({ page, context }) => {
  const loginPage = new LoginPage(page);

  await loginPage.goto();
  await loginPage.login(
    process.env.SAUCE_USERNAME!,
    process.env.SAUCE_PASSWORD!
  );
  console.log('✅ Login realizado com sucesso no setup');
  console.log('URL atual após login:', page.url());

  await context.storageState({ path: storageStatePath });
  console.log('Salvando storage em:', storageStatePath);
  console.log('Arquivo existe?', require('fs').existsSync(storageStatePath));
});
