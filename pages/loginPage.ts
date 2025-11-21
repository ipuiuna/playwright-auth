import { type Locator, type Page } from '@playwright/test';

export class LoginPage {
  readonly page: Page;
  readonly userInput: Locator;
  readonly passwordInput: Locator;
  readonly loginButton: Locator;
  constructor(page: Page) {
    this.page = page;
    this.userInput = page.getByTestId('username');
    this.passwordInput = page.getByTestId('password');
    this.loginButton = page.getByTestId('login-button');
  }

  async goto() {
    await this.page.goto(process.env.BASE_URL!);
  }

  async login(user: string, password: string) {
    await this.userInput.fill(user);
    await this.passwordInput.fill(password);
    await this.loginButton.click();
  }
}
