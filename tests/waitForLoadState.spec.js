import {test,expect} from '@playwright/test';

test('waitfor load',async({page})=>{

    await page.goto('https://freelance-learn-automation.vercel.app/login')

    await page.getByRole('link',{name:'New user? Signup'}).click()

    await page.waitForLoadState('networkidle')

   const count= await page.locator('//input[@type="checkbox"]').count()

   expect (count).toBe(8)
})