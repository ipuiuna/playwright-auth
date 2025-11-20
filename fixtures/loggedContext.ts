import { test as base, Page } from '@playwright/test';

type Fixtures = {
  accessInventory: Page;
};

export const test = base.extend<Fixtures>({
  accessInventory: async ({ page }, use) => {
    await page.goto('/inventory.html');
    await use(page);
  },
});
