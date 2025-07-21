import {test,expect} from '@playwright/test';
const testdata=JSON.parse(JSON.stringify(require("../testData.json")))

test('login data using testdata',async({page})=>{

    await page.goto('https://freelance-learn-automation.vercel.app/login')

    await page.getByPlaceholder('Enter Email').fill(testdata.username)

    await page.getByPlaceholder('Enter Password').fill(testdata.password)


})

