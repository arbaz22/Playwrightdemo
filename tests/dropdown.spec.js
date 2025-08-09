import {test,expect} from '@playwright/test';

test('dropdown functionality',async({page})=>{

    await page.goto('https://freelance-learn-automation.vercel.app/signup')

    await page.locator('#state').selectOption({label:'Goa'})

    await page.waitForTimeout(4000)

    await page.locator('#state').selectOption({value:'Karnataka'})

    await page.locator('#state').selectOption({index:5})

    const country=await page.locator('#state').textContent()

    console.log(country);

    await expect(country.includes('Kerala')).toBeTruthy();

})