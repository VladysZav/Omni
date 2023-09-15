const {chromium} = require('playwright')

module.exports = {
        browserType: chromium,
        baseUrl: 'https://a.cms.omniupdate.com/11/#qa/fari-test/gallena',
        launchOptions: {headless: false},
        waitForTimeout: 10000,
}