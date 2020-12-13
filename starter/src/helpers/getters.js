import { browser } from 'protractor';

const getters = {
    getElement: (finder) => browser.findElement(finder),
    getElements: (finder) => browser.findElements(finder),
};

export default getters;
