const { expect } = require('@playwright/test');
const config = require('../config');

class MainPage {

    constructor(page) {
        this.page = page;
        this.userPanel = page.locator('div[aria-label="User Panel"]');
    }

    async userPanelIsVisible() {
        await this.page.waitForTimeout(2000);
        await expect(this.userPanel).toBeVisible();
    }
}

module.exports = MainPage