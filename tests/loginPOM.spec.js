import { test, expect } from '@playwright/test';
const {LoginPage}=require('../Pages/login_page');

test('login to app',async({page})=>{
    
   const loginPage=new LoginPage(page)

   await loginPage.goto()

   await loginPage.login('Admin','admin123')

})