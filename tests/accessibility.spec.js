import {expect,test} from'@playwright/test';
const AxeBuilder = require('@axe-core/playwright').default;

test('accessibility functionality',async({page})=>{
  
    await page.goto('https://www.google.com/')
    const accessibilityScanResults=await new AxeBuilder({page}).analyze();
  //  expect(accessibilityScanResults.violations).toEqual([70]);

})