import finders from '../../helpers/finders';
import getters from '../../helpers/getters';
import jsClickers from '../../helpers/commands';

const automationId = finders.automationId;
const css = finders.css;
const getElement = getters.getElement;
const getElements = getters.getElements;
const clickByCss = jsClickers.automationIdClick;

const navComponent = {
    by: css,
    selector: 'app-sidenav',
};
const newButton = {
    by: automationId,
    selector: 'create-button',
};
const menuPanel = {
    by: css,
    selector: '.aca-menu-panel',
};
const menuOption = { by: css, selector: 'app-toolbar-menu-item button span' };
const options = {
    uploadFile: {
        by: css,
        selector: '#app\\.create\\.uploadFile',
    },
    uploadFolder: {
        by: css,
        selector: '#app\\.create\\.uploadFolder',
    },
    createFolder: {
        by: css,
        selector: '#app\\.create\\.folder',
    },
    createLibrary: {
        by: css,
        selector: '#app\\.create\\.library',
    },
    createFileFromTemplate: {
        by: css,
        selector: '#app\\.create\\.fileFromTemplate',
    },
    createFolderFromTemplate: {
        by: css,
        selector: '#app\\.create\\.folderFromTemplate',
    },
};

const nav = {
    isDisplayed: () =>
        getElement(navComponent.by(navComponent.selector)).isDisplayed(),

    createButton: {
        isDisplayed: () =>
            getElement(newButton.by(newButton.selector)).isDisplayed(),
        getText: () => getElement(newButton.by(newButton.selector)).getText(),
        click: () => getElement(newButton.by(newButton.selector)).click(),
        forceClick: () => clickByCss(newButton.selector),
        isEnabled: () =>
            getElement(newButton.by(newButton.selector)).isEnabled(),
    },

    menuPanel: {
        isDisplayed: () =>
            getElement(menuPanel.by(menuPanel.selector)).isDisplayed(),
        getOptions: () => {
            let foundOptions = [];
            getElements(menuOption.by(menuOption.selector)).then((options) => {
                options.forEach((option) => {
                    option.getText().then((text) => {
                        foundOptions.push(text);
                    });
                });
            });
            return foundOptions;
        },

        uploadFile: {
            isDisplayed: () =>
                getElement(
                    options.uploadFile.by(options.uploadFile.selector),
                ).isDisplayed(),
            isEnabled: () =>
                getElement(
                    options.uploadFile.by(options.uploadFile.selector),
                ).isEnabled(),
            getText: () =>
                getElement(
                    options.uploadFile.by(options.uploadFile.selector),
                ).getText(),
            click: () =>
                getElement(
                    options.uploadFile.by(options.uploadFile.selector),
                ).click(),
        },

        uploadFolder: {
            isDisplayed: () =>
                getElement(
                    options.uploadFolder.by(options.uploadFolder.selector),
                ).isDisplayed(),
            isEnabled: () =>
                getElement(
                    options.uploadFolder.by(options.uploadFolder.selector),
                ).isEnabled(),
            getText: () =>
                getElement(
                    options.uploadFolder.by(options.uploadFolder.selector),
                ).getText(),
            click: () =>
                getElement(
                    options.uploadFolder.by(options.uploadFolder.selector),
                ).click(),
        },

        createFolder: {
            isDisplayed: () =>
                getElement(
                    options.createFolder.by(options.createFolder.selector),
                ).isDisplayed(),
            isEnabled: () =>
                getElement(
                    options.createFolder.by(options.createFolder.selector),
                ).isEnabled(),
            getText: () =>
                getElement(
                    options.createFolder.by(options.createFolder.selector),
                ).getText(),
            click: () =>
                getElement(
                    options.createFolder.by(options.createFolder.selector),
                ).click(),
        },

        createLibrary: {
            isDisplayed: () =>
                getElement(
                    options.createLibrary.by(options.createLibrary.selector),
                ).isDisplayed(),
            isEnabled: () =>
                getElement(
                    options.createLibrary.by(options.createLibrary.selector),
                ).isEnabled(),
            getText: () =>
                getElement(
                    options.createLibrary.by(options.createLibrary.selector),
                ).getText(),
            click: () =>
                getElement(
                    options.createLibrary.by(options.createLibrary.selector),
                ).click(),
        },

        createFileFromTemplate: {
            isDisplayed: () =>
                getElement(
                    options.createFileFromTemplate.by(
                        options.createFileFromTemplate.selector,
                    ),
                ).isDisplayed(),
            isEnabled: () =>
                getElement(
                    options.createFileFromTemplate.by(
                        options.createFileFromTemplate.selector,
                    ),
                ).isEnabled(),
            getText: () =>
                getElement(
                    options.createFileFromTemplate.by(
                        options.createFileFromTemplate.selector,
                    ),
                ).getText(),
            click: () =>
                getElement(
                    options.createFileFromTemplate.by(
                        options.createFileFromTemplate.selector,
                    ),
                ).click(),
        },

        createFolderFromTemplate: {
            isDisplayed: () =>
                getElement(
                    options.createFolderFromTemplate.by(
                        options.createFolderFromTemplate.selector,
                    ),
                ).isDisplayed(),
            isEnabled: () =>
                getElement(
                    options.createFolderFromTemplate.by(
                        options.createFolderFromTemplate.selector,
                    ),
                ).isEnabled(),
            getText: () =>
                getElement(
                    options.createFolderFromTemplate.by(
                        options.createFolderFromTemplate.selector,
                    ),
                ).getText(),
            click: () =>
                getElement(
                    options.createFolderFromTemplate.by(
                        options.createFolderFromTemplate.selector,
                    ),
                ).click(),
        },
    },
};

export default nav;
