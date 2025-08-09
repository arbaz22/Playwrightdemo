import { test, expect } from '@playwright/test';

test.skip('mousehover function',async ({page})=>{

    await page.goto('https://freelance-learn-automation.vercel.app/login')

    await page.getByPlaceholder('Enter Email').fill('admin@email.com')

    await page.getByPlaceholder('Enter Password').fill('admin@123')

    await page.getByRole('link',{name:'Sign In'}).click();


})

test('mousehovering function',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/hovers');
await page.locator('.figure:nth-child(3)').hover(); // Hover over the 2nd profile
await expect(page.locator('text=View profile')).toBeVisible();

})