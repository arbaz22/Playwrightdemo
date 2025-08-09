import {test,expect} from '@playwright/test'

test('cross domain functionality',async({page})=>{

    await page.goto('https://www.google.com/')

    await page.goto('https://playwright.dev/')

    const str=await page.title();
    
    console.log(str)

    await expect(str).toContain('Playwright')

})