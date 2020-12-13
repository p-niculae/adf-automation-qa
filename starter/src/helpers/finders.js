import { by } from 'protractor';

const finders = {
    automationId: (selector) => by.css(`[data-automation-id=${selector}]`),
    css: (selector) => by.css(selector),
};

export default finders;
