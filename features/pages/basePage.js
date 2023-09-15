const { expect } = require('@playwright/test');
const config = require('../config')

class BasePage {

    constructor(page) {
        this.page = page;
    }

    async navigate() {
        await this.page.goto(config.baseUrl, { timeout: 20000 });
    }
}

module.exports = BasePage