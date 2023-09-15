const config = require('../config')
const { Given, When, Then, Before, After } = require ('@cucumber/cucumber')
const BasePage = require('../pages/basePage')
const LoginPage = require('../pages/loginPage')
const MainPage = require('../pages/mainPage')
const { chromium } = require('playwright')

let browser
let page
let basePage
let loginPage
let mainPage

Before({timeout: 2 * 5000}, async () => {
    browser = await chromium.launch()
    page = await browser.newPage({ timeout: 20000 })
})

After(async () => {
    await browser.close()
})

Given ('The tester opens the browser and goes to the site',{timeout: 2 * 5000}, async () => {
    basePage = new BasePage(page)
    await basePage.navigate()
})

When ('The tester enters a valid username and password and click on login button', {timeout: 2 * 5000}, async () => {
    loginPage = new LoginPage(page)
    await loginPage.enterUserData('adnan', 'adnan')
    await loginPage.clickOnLoginButton()
})

When ('The tester enters a invalid username and valid password and click on login button', {timeout: 2 * 5000}, async () => {
    loginPage = new LoginPage(page)
    await loginPage.enterUserData('adnan1', 'adnan')
    await loginPage.clickOnLoginButton()
})

When ('The tester enters a valid username and invalid password and click on login button', {timeout: 2 * 5000}, async () => {
    loginPage = new LoginPage(page)
    await loginPage.enterUserData('adnan', 'adnan1')
    await loginPage.clickOnLoginButton()
})

When ('The tester enters a invalid username and password and click on login button',  async () => {
    loginPage = new LoginPage(page)
    await loginPage.enterUserData('adnan1', 'adnan1')
    await loginPage.clickOnLoginButton()
})


Then ('The tester checks that he is logged in', {timeout: 2 * 5000}, async () => {
    mainPage = new MainPage(page)
    await mainPage.userPanelIsVisible()
})

Then ('The tester checks that he is not logged in', {timeout: 2 * 5000}, async () => {
    loginPage = new LoginPage(page)
    await loginPage.checkAlertLoginMessage()
})

