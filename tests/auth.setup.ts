import { test as setup } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';
import path from 'path';
import fs from 'fs';

const STORAGE_PATH = path.join(__dirname, '../.auth/auth.json');

setup('Setup for authentication tests', async ({ page }) => {
  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(
    process.env.SAUCE_USERNAME!,
    process.env.SAUCE_PASSWORD!
  );

  console.log('✅ Login realizado com sucesso no setup');
  console.log('URL atual após login:', page.url());
  console.log('CWD do setup:', process.cwd());
  console.log('Storage path (setup):', STORAGE_PATH);
  console.log('Storage existe ANTES de salvar?', fs.existsSync(STORAGE_PATH));

  fs.mkdirSync(path.dirname(STORAGE_PATH), { recursive: true });

  await page.context().storageState({ path: STORAGE_PATH });

  console.log('Storage salvo com success em:', STORAGE_PATH);
  console.log('Storage existe DEPOIS de salvar?', fs.existsSync(STORAGE_PATH));
});
