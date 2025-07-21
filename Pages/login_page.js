exports.LoginPage=

class LoginPage{

    constructor(page)
    {
        this.page=page;
        this.usernameInput=page.locator('//input[@placeholder="Username"]')
        this.passwordInput=page.locator('//input[@placeholder="Password"]')
        this.loginButton=page.getByRole('button',{name:'Login'})
    }

    async goto()
    {
        await this.page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
    }

    async login(username,password)
    {
        await this.usernameInput.fill(username)
        await this.passwordInput.fill(password)
        await this.loginButton.click()
    }
}