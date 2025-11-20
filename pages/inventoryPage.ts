import { type Locator, type Page, expect } from '@playwright/test';

export class InventoryPage {
  readonly items: Locator;

  constructor(private page: Page) {
    this.items = this.page.getByTestId('inventory-item');
  }

  async assertInventoryIsVisible() {
    await expect(this.page).toHaveURL(/inventory.html/);
    await expect(this.items).toHaveCount(6);
  }
}
