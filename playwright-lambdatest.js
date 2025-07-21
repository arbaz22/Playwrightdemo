require("dotenv").config();

const {chromium} = require("playwright");
const {expect}= require("@playwright/test");

(async ()=>{
const capabilities={
    browserName:"Chrome",
    browserVersion:"latest",
    "LT:Options":{
        platform:"Windows 11",
        build: "Playwright Lambatest Build",
        name: "Playwright Lambatest Test",
        user:process.env.LT_USERNAME,
        accesskey:process.env.LT_ACCESS_KEY,
        network:true,
        video:true,
        console:true,
    },
}
 
    const browser= await chromium.connect({
        wsEndpoint:`wss://cdp.lambdatest.com/playwright?capabilities=$
        {encodeURIComponent(JSON.stringify(capabilities)
    )}`,
    });

    const page=await browser.newPage();
    await page.goto('https://ecommerce-playground.lambdatest.io/');
    try{
        await expect(page).toHaveTitle('Your Store');
        await page.evaluate((_)=>{ },
        `lambdatest_action: $(JSON.stringify({ action:"setTestStatus",arguements:{status:"passed",remark:"phone products searched"}})}`)
    }
    catch(e)
    {
        await page.evaluate((_)=>{ },
        `lambdatest_action: $(JSON.stringify({ action:"setTestStatus",arguements:{status:"failed",remark:"phone products searche failed"}})}`)
    }
    await browser.close();

}) ();
