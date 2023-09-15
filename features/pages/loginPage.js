const { expect } = require('@playwright/test');
const config = require('../config');

class LoginPage {

    constructor(page) {
        this.page = page;
        this.userNameInput = page.locator('input[id="username"]');
        this.passwordInput = page.locator('input[id="password"]');
        this.loginButton = page.locator('button[data-name="login-button"]');
        this.alertLoginMessage = page.locator('div[id="login-alert"]');
    }

    async enterUserData(userName, password) {
        await this.page.waitForTimeout(2000);
        await this.userNameInput.fill(userName)
        await this.passwordInput.fill(password)
    }

    async clickOnLoginButton() {
        await this.loginButton.click()
        await this.page.waitForTimeout(2000);
    }

    async checkAlertLoginMessage() {
        await expect(this.alertLoginMessage).toBeVisible();
        await expect(this.alertLoginMessage).toContainText('The login information provided is invalid.')
    }
}

module.exports = LoginPage