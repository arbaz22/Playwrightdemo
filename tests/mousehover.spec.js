import { test, expect } from '@playwright/test';

test('mousehover function',async ({page})=>{

    await page.goto('https://freelance-learn-automation.vercel.app/login')

    await page.getByPlaceholder('Enter Email').fill('admin@email.com')

    await page.getByPlaceholder('Enter Password').fill('admin@123')

    await page.getByRole('link',{name:'Sign In'}).click();


})