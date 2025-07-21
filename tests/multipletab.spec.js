import { test, expect } from '@playwright/test';
test('working with multiple tabs',async({browser})=>{

    const context= await browser.newContext()

    const page=await context.newPage();

    await page.goto('https://freelance-learn-automation.vercel.app/login')

   const [newPage]= await Promise.all
    (
        [
                 context.waitForEvent("page"),
                 page.locator('//*[@id="login_container"]/div/div/a[4]').click()
        ]
    ) 

});