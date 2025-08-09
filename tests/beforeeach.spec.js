import {expect,test} from '@playwright/test';

test.beforeEach(async({page})=>{

   await page.goto('https://freelance-learn-automation.vercel.app/login')

    await page.getByPlaceholder('Enter Email').fill('admin@email.com')

    await page.getByPlaceholder('Enter Password').fill('admin@123')

    await page.getByRole('button',{name:'Sign in'}).click();

})

test('check for cart option',async({page})=>{

    await page.getByRole('button',{name:'Cart'}).click();
    await expect(page.getByRole('button',{name:'Shop Now'})).toBeEnabled()
})