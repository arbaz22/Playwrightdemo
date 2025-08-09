import {test,expect} from '@playwright/test';

test('shadow dom',async({page})=>{

    await page.goto('https://letcode.in/shadow')

    await page.locator('#fname').fill('Arbaz',{timeout:10000})
} )