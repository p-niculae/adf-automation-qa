import { browser, ExpectedConditions } from 'protractor';
import finders from '../../helpers/finders';
import getters from '../../helpers/getters';

const css = finders.css;
const getElement = getters.getElement;

const dialogComponent = { by: css, selector: 'mat-dialog-container' };
const titleLabel = { by: css, selector: 'mat-dialog-container h2' };
const nameField = { by: css, selector: '#adf-folder-name-input' };
const descriptionField = { by: css, selector: '#adf-folder-description-input' };
const cancelButton = { by: css, selector: '#adf-folder-cancel-button' };
const createButton = { by: css, selector: '#adf-folder-create-button' };

const dialog = {
    waitForDialogOpen: () =>
        new Promise((resolve, reject) => {
            browser.manage().timeouts().implicitlyWait(0);
            browser.wait(
                ExpectedConditions.visibilityOf($(dialogComponent.selector)),
                1500,
                'Timed out waiting for dialog to be visible',
            );
            browser.manage().timeouts().implicitlyWait(3000);
            resolve(true);
        }),
    isDisplayed: () =>
        getElement(dialogComponent.by(dialogComponent.selector)).isDisplayed(),
    waitForDialogClosed: () =>
        new Promise((resolve, reject) => {
            browser.manage().timeouts().implicitlyWait(0);
            browser.wait(
                ExpectedConditions.invisibilityOf($(dialogComponent.selector)),
                1500,
                'Timed out waiting for dialog to be closed',
            );
            browser.manage().timeouts().implicitlyWait(3000);
            resolve(true);
        }),

    title: {
        isDisplayed: () =>
            getElement(titleLabel.by(titleLabel.selector)).isDisplayed(),
        getText: () => getElement(titleLabel.by(titleLabel.selector)).getText(),
    },

    nameField: {
        isDisplayed: () =>
            getElement(nameField.by(nameField.selector)).isDisplayed(),
        getText: () =>
            getElement(nameField.by(nameField.selector)).getAttribute('value'),
        click: () => getElement(nameField.by(nameField.selector)).click(),
        fillWith: (text) =>
            getElement(nameField.by(nameField.selector)).sendKeys(text),
        clear: () => getElement(nameField.by(nameField.selector)).clear(),
    },

    descriptionField: {
        isDisplayed: () =>
            getElement(
                descriptionField.by(descriptionField.selector),
            ).isDisplayed(),
        getText: () =>
            getElement(
                descriptionField.by(descriptionField.selector),
            ).getAttribute('value'),
        click: () =>
            getElement(descriptionField.by(descriptionField.selector)).click(),
        fillWith: (text) =>
            getElement(descriptionField.by(descriptionField.selector)).sendKeys(
                text,
            ),
        clear: () =>
            getElement(descriptionField.by(descriptionField.selector)).clear(),
    },

    cancelButton: {
        isDisplayed: () =>
            getElement(cancelButton.by(cancelButton.selector)).isDisplayed(),
        getText: () =>
            getElement(cancelButton.by(cancelButton.selector)).getText(),
        click: () => getElement(cancelButton.by(cancelButton.selector)).click(),
    },

    createButton: {
        isDisplayed: () =>
            getElement(createButton.by(createButton.selector)).isDisplayed(),
        getText: () =>
            getElement(createButton.by(createButton.selector)).getText(),
        click: () => getElement(createButton.by(createButton.selector)).click(),
        isEnabled: () =>
            getElement(createButton.by(createButton.selector)).isEnabled(),
    },
};

export default dialog;
