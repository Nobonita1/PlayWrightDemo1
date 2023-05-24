exports.LoginPage = class LoginPage {

    constructor(page) {
        this.page = page;
        this.MyURL = page.goto('https://the-internet.herokuapp.com/login');
        this.UserName_Txt = page.getByLabel('Username');
        this.PassWord_Txt = page.getByLabel('Password');
        this.Login_Button = page.getByRole('button', { name: 'Login' });

    }
    async LaunchBrowser() {
        await this.MyURL

    }
    async HomePageLogin(username, password) {
        await this.UserName_Txt.fill(username);
        await this.PassWord_Txt.fill(password);
        await this.Login_Button.click();
    }

}

