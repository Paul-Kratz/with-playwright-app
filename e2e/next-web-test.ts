import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.shutterstock.com/search/dogs');
  await page.getByRole('link', { name: 'Log in' }).click();
  await page.frameLocator('iframe[title="Login"]').locator('[data-test-id="create-user-btn"]').click();
  await page.frameLocator('iframe[title="Login"]').locator('[data-test-id="email-input"]').click();
  await page.frameLocator('iframe[title="Login"]').locator('[data-test-id="email-input"]').fill(`popoposjsj${Date.now()}@shutterstock.com`);
  await page.frameLocator('iframe[title="Login"]').locator('[data-test-id="password-input"]').click();
  await page.frameLocator('iframe[title="Login"]').locator('[data-test-id="password-input"]').fill('12345678');
  await page.frameLocator('iframe[title="Login"]').locator('[data-test-id="create-user-form-submit-button"]').click();
  await page.getByText('Accept All Cookies', { exact: true }).click();
  await page.getByRole('button', { name: 'Skip' }).click();
  await page.getByRole('button', { name: 'Continue to browse' }).click();
  await page.getByLabel('Download').click();
  await page.getByRole('tab', { name: 'Credit Packs' }).click();
  await page.locator('div').filter({ hasText: /^Standard license$/ }).click();
  await page.getByText('Enhanced license').click();
});