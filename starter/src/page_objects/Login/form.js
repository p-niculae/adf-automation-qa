import finders from '../../helpers/finders';
import getters from '../../helpers/getters';

const automationId = finders.automationId;
const css = finders.css;
const getElement = getters.getElement;

const formComponent = { by: css, selector: '#adf-login-form' };
const logoComponent = { by: css, selector: '#adf-login-img-logo' };
const usernameField = { by: css, selector: '#username' };
const passwordField = { by: css, selector: '#password' };
const revealPasswordButton = {
    by: automationId,
    selector: 'show_password',
};
const hidePasswordButton = {
    by: automationId,
    selector: 'hide_password',
};
const loginButton = { by: css, selector: '#login-button' };

const form = {
    isDisplayed: () =>
        getElement(formComponent.by(formComponent.selector)).isDisplayed(),
    logo: {
        isDisplayed: () =>
            getElement(logoComponent.by(logoComponent.selector)).isDisplayed(),
    },

    usernameField: {
        isDisplayed: () =>
            getElement(usernameField.by(usernameField.selector)).isDisplayed(),
        click: () =>
            getElement(usernameField.by(usernameField.selector)).click(),
        fillWith: (text) =>
            getElement(usernameField.by(usernameField.selector)).sendKeys(text),
        clear: () =>
            getElement(usernameField.by(usernameField.selector)).clear(),
        isEmpty: () =>
            getElement(usernameField.by(usernameField.selector))
                .getText()
                .then((text) => text === ''),
        getText: () =>
            getElement(usernameField.by(usernameField.selector)).getAttribute(
                'value',
            ),
    },

    passwordField: {
        isDisplayed: () =>
            getElement(passwordField.by(passwordField.selector)).isDisplayed(),
        click: () =>
            getElement(passwordField.by(passwordField.selector)).click(),
        fillWith: (text) =>
            getElement(passwordField.by(passwordField.selector)).sendKeys(text),
        clear: () =>
            getElement(passwordField.by(passwordField.selector)).clear(),
        isEmpty: () =>
            getElement(passwordField.by(passwordField.selector)).getText() ===
            '',
        getText: () =>
            getElement(passwordField.by(passwordField.selector)).getAttribute(
                'value',
            ),
    },

    revealPasswordButton: {
        isDisplayed: () =>
            getElement(
                revealPasswordButton.by(revealPasswordButton.selector),
            ).isDisplayed(),
        click: () =>
            getElement(
                revealPasswordButton.by(revealPasswordButton.selector),
            ).click(),
    },

    hidePasswordButton: {
        isDisplayed: () =>
            getElement(
                hidePasswordButton.by(hidePasswordButton.selector),
            ).isDisplayed(),
        click: () =>
            getElement(
                hidePasswordButton.by(hidePasswordButton.selector),
            ).click(),
    },

    loginButton: {
        isDisplayed: () =>
            getElement(loginButton.by(loginButton.selector)).isDisplayed(),
        isEnabled: () =>
            getElement(loginButton.by(loginButton.selector)).isEnabled(),
        click: () => getElement(loginButton.by(loginButton.selector)).click(),
        getText: () =>
            getElement(loginButton.by(loginButton.selector)).getText(),
    },
};

export default form;
