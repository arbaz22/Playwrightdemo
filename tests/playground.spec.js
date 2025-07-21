import { test, expect } from '@playwright/test';

test.describe('testing ecommerce application',()=>{
    test('has title', async ({page})=>{

        await page.goto('https://ecommerce-playground.lambdatest.io/');
        await expect(page).toHaveTitle('Your Store');

    })

    test('clicking on link and my account',async ({page})=>{
         await page.goto('https://ecommerce-playground.lambdatest.io/');
         await page.getByRole('link',{name:'Special Hot',exact:true}).click()
         await page.getByRole('link',{name:'Continue',exact:true}).click()

    })

    test('search product and buy',async({page})=>{
         await page.goto('https://ecommerce-playground.lambdatest.io/');
         await page.getByPlaceholder('Search For Products').first().click()
          await page.getByPlaceholder('Search For Products').first().fill('Phone')
       await page.getByRole('button',{name:'search'}).click()
      //   await element.scrollIntoViewIfNeeded();
        //  await page.locator(".product thumb").nth(2).click()
        //  await element.scrollIntoViewIfNeeded();
         await page.locator('#mz-product-grid-image-79-212469').click();
          await page.getByRole('button',{name:'BUY NOW'}).click()


    })

    test('locator strategies',async({page}) =>{

         await page.goto('https://ecommerce-playground.lambdatest.io/');
         await page.getByRole('button',{name:'MY ACCOUNT'}).click()
         await page.getByPlaceholder('E-Mail Address').first().fill('arbaz@gmail.com');
         await page.getByPlaceholder('Password').first().fill('Arbaz@25');
        await page.getByRole('button',{name:'Login'}).click();
         await  expect (page.locator('#account-login .alert.alert-danger')).toBeVisible()
         await expect (page.locator('//*[@id="content"]/div/div[1]/div/div/h2')).toBeVisible()
         
    })
})