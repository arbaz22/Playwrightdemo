import {expect,test} from '@playwright/test'

test('keyboard functionality',async({page})=>{

    await page.goto('https://www.google.com/');

    await page.locator('#APjFqb').focus();

    await page.keyboard.type('Mukesh Otwani!')

    await page.keyboard.press('ArrowLeft')

    await page.keyboard.down('Shift')

    for(let i=0;i<6;i++)
    {
        await page.keyboard.press('ArrowLeft')
    }

    await page.keyboard.up('Shift')

    await page.keyboard.press('Backspace')



   // await page.keyboard.press("Backspace");

   //await page.keyboard.press("Enter");

})