# Playwright Authentication – Reusing Login State

![Playwright](https://img.shields.io/badge/Playwright-v1.48+-blue?logo=playwright)
![Node.js](https://img.shields.io/badge/Node.js-20+-green?logo=node.js)
![GitHub Actions](https://github.com/ipuiuna/playwright-auth/actions/workflows/playwright.yml/badge.svg?branch=main)

A **real-world, production-ready** example of end-to-end testing with **Playwright** on the [SauceDemo](https://www.saucedemo.com) demo site, showing how to:

- Run public (unauthenticated) tests
- Reuse login state across tests using `storageState`
- Keep credentials secure with environment variables and GitHub Secrets
- Run everything reliably on GitHub Actions

No credentials are hard-coded. Everything works locally and in CI.


## Getting Started

### Local Setup

```bash
git clone https://github.com/ipuiuna/playwright-auth.git
cd playwright-auth

npm install
npx playwright install --with-deps

# Create a .env file grab the value from the saucedemo website

# Run all tests
npx playwright test

# Only authenticated tests
npx playwright test --grep "@auth"

# Only public tests
npx playwright test --grep -v "@auth"

# UI Mode (awesome for development)
npx playwright test --ui
