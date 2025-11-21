import { test, expect } from '@playwright/test';
import { InventoryPage } from '../pages/inventoryPage';

test.describe('Tests with page authenticated', () => {
  test(
    'should be already logged in (auth setup working)',
    { tag: '@auth' },
    async ({ page }) => {
      console.log('Início do teste autenticado');
      console.log(
        'URL inicial (deve ser inventory se storageState funcionou):',
        page.url()
      );
      console.log('Cookies carregadas:', await page.context().cookies());
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
