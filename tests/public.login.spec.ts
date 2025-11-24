import { test, expect } from '@playwright/test';

test.describe('No Auth Tests', () => {
  test('should access public page without authentication', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL(/saucedemo.com/);
  });
  test('should display login form', async ({ page }) => {
    await page.goto('/');
    const loginForm = page.locator('#login_button_container');
    await expect(loginForm).toBeVisible();
    await expect(page.getByTestId('username')).toBeVisible();
    await expect(page.getByTestId('password')).toBeVisible();
    await expect(page.getByTestId('login-button')).toBeVisible();
  });
});
