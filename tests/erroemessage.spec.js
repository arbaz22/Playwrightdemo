import { test, expect } from '@playwright/test';

test('error message',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')

    await page.getByPlaceholder('Username').fill('Admin')
    await page.getByPlaceholder('Password').fill('admin')
    await page.getByRole('button',{name:'Login'}).click();
   // await expect(page.getByText('Invalid Credentials')).toBeVisible();
   const errorMessage=await page.getByText('Invalid Credentials').textContent();
   console.log(errorMessage)
   expect(errorMessage.includes('Invalid')).toBeTruthy()
   expect(errorMessage==='Invalid credentials').toBeTruthy()
})

test('maximize browser',async({page})=>{

     await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
   console.log(await page.viewportSize().width)
   console.log(await page.viewportSize().height)
     


})