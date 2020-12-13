import { browser } from 'protractor';
import { protractor } from 'protractor/built/ptor';

const actions = {
    rightClick: (selector) =>
        browser.actions().click(selector, protractor.Button.RIGHT).perform(),
};

export default actions;
