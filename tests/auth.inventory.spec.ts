import { expect } from '@playwright/test';
import { test } from '../fixtures/loggedContext';
import { InventoryPage } from '../pages/inventoryPage';

test.describe('Tests with page authenticated', () => {
  test(
    'should be already logged in (auth setup working)',
    { tag: '@auth' },
    async ({ accessInventory }) => {
      console.log('URL -> ', accessInventory.url());
      await expect(accessInventory).toHaveURL(/inventory.html/);
    }
  );

  test(
    'should display 6 items at /inventory.html',
    { tag: '@auth' },
    async ({ accessInventory }) => {
      const inventoryPage = new InventoryPage(accessInventory);
      await inventoryPage.assertInventoryIsVisible();
    }
  );
});
