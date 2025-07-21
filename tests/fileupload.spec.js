import {test, expect} from  '@playwright/test';

test('file upload functionality',async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload')
    await page.locator('#file-upload').setInputFiles('C:/Users/arbaz/Downloads/Arbaz_DegreeCertificate.jpg');
    await page.locator('#file-submit').click();
    await expect(page.getByText('File Uploaded')).toBeVisible()
})





