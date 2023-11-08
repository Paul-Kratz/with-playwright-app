import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('http://localhost:3000/');
  await page.getByRole('link', { name: 'About Page → Playwright will test if this link is working.' }).click();
  await page.getByRole('link', { name: '← Go Back' }).click();
});