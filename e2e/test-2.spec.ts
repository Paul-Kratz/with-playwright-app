import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.qa.shutterstock.com/pricing');
  await page.getByRole('button', { name: '25' }).nth(2).click();
  await page.getByRole('button', { name: '50', exact: true }).first().click();
  await page.getByRole('button', { name: '150' }).first().click();
  await page.getByRole('button', { name: '350' }).first().click();
  await page.getByRole('button', { name: '750' }).first().click();
  await page.getByLabel('Pay upfront (Save $389)').check();
  await page.getByRole('button', { name: '10' }).click();
  await page.getByRole('button', { name: '25' }).nth(2).click();
  await page.getByRole('button', { name: '50', exact: true }).first().click();
  await page.getByRole('button', { name: '150' }).first().click();
  await page.getByRole('button', { name: '350' }).first().click();
  await page.getByRole('button', { name: '750' }).first().click();
  await expect(page.getByRole('heading', { name: '$1,599.20 /year' })).toBeAttached();
});