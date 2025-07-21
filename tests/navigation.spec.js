import { test, expect } from '@playwright/test';

test('navigation testing',async({page})=>{
    await page.goto('https://playwright.dev/');
    await page.getByRole('link',{name:'Get Started'}).click();
  //  await expect (page.locator('//*[@id="__docusaurus_skipToContent_fallback"]/div/div/main/div/div/div/div/article/div[2]/header/h1')).toBeVisible();
    await expect (page.getByText('Installation').first()).toBeVisible();

})





