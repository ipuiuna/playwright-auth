import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/inventoryPage';
import path from 'path';
import fs from 'fs';

test.describe('Tests with page authenticated', () => {
  test(
    'should be already logged in (auth setup working)',
    { tag: '@auth' },
    async ({ page }) => {
      console.log('Início do teste autenticado');
      console.log('CWD do teste auth:', process.cwd());
      const resolved = path.resolve(process.cwd(), 'storage/storageState.json');
      console.log('Resolved path (authenticated):', resolved);
      console.log(
        'Arquivo existe no resolved path (authenticated)?',
        fs.existsSync(resolved)
      );

      console.log(
        'URL inicial (deve ser inventory se storageState funcionou):',
        page.url()
      );
      const cookies = await page.context().cookies();
      console.log('Cookies carregadas:', cookies);

      // agora a navegação e asserts
      await page.goto('/inventory.html');
      await expect(page).toHaveURL(/inventory.html/);
    }
  );

  test(
    'should display 6 items at /inventory.html',
    { tag: '@auth' },
    async ({ page }) => {
      await page.goto('/inventory.html');
      const inventoryPage = new InventoryPage(page);
      await inventoryPage.assertInventoryIsVisible();
    }
  );
});
