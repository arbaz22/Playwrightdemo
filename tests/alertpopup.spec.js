import {test,expect} from '@playwright/test';

test('alertpopup functionality',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog', async(d)=>{

        expect(d.type()).toContain("alert")

        expect(d.message()).toContain("I am a JS Alert")

        await d.accept()
    })

    await page.getByRole('button',{name:'Click for JS Alert'}).click();
})

test('confirmationpopup',async({page})=>{

    await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog',async(dialogWindow)=>{
          expect(dialogWindow.type()).toContain("confirm")

        expect(dialogWindow.message()).toContain("I am a JS Confirm")

        await dialogWindow.dismiss()

    })
    
     await page.getByRole('button',{name:'Click for JS Confirm'}).click();

})

test.only('promptbox',async({page})=>{

     await page.goto('https://the-internet.herokuapp.com/javascript_alerts')

    page.on('dialog',async(promptWindow)=>{
          expect(promptWindow.type()).toContain("prompt")

        expect(promptWindow.message()).toContain("I am a JS prompt")

        await promptWindow.accept('Arbaz')

    })
    
     await page.getByRole('button',{name:'Click for JS Prompt'}).click();

})


