import {test,expect} from '@playwright/test';

test('capture network log',async({page})=>{
  
    await page.goto('https://www.amazon.in/')

    page.on('request', request => {
    console.log('>>', request.method(), request.url());
  });

})