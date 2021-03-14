import Page from './page';

class LoginPage extends Page {

    get login_nav_link () { return $('a[href="#/login"]')}
    get inputUsername () { return $('form input[placeholder="Username"]') }
    get inputPassword () { return $('form input[placeholder="Password"]') }
    get btnSubmit () { return $('button[type="submit"]') }
    get homePage () { return $('.home-page') }


    login (username, password) {
        this.inputUsername.setValue(username);
        this.inputPassword.setValue(password);
        this.btnSubmit.click();
        this.homePage.waitForDisplayed();
    }

    open (path) {
        super.open(path);
    }
}

export default new LoginPage();
