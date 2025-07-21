import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://ecommerce-playground.lambdatest.io/');
  await page.getByRole('textbox', { name: 'Search For Products' }).click();
  await page.getByRole('textbox', { name: 'Search For Products' }).fill('phone');
  await page.getByRole('button', { name: 'Search' }).click();
  await page.locator('#mz-product-grid-image-79-212469').click();
  await page.getByRole('button', { name: 'Buy now' }).click();
});