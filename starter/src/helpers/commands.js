import { browser } from 'protractor';

const jsClickers = {
    cssClick: (selector) =>
        browser.executeScript(
            `document.querySelectorAll('${selector}')[0].click();`,
        ),
    automationIdClick: (selector) =>
        browser.executeScript(
            `document.querySelectorAll('[data-automation-id=${selector}]')[0].click();`,
        ),
};

export default jsClickers;
