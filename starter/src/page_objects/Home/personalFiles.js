import finders from '../../helpers/finders';
import getters from '../../helpers/getters';
import actions from '../../helpers/actions';

const automationId = finders.automationId;
const css = finders.css;
const getElement = getters.getElement;
const getElements = getters.getElements;
const rightClick = actions.rightClick;

const foldersGrid = { by: css, selector: '.adf-datatable-body' };
const folders = { by: css, selector: '.adf-datatable-body adf-datatable-row' };
const testFolder = { by: automationId, selector: 'adf-name-column' };
const targetFolder = { by: css, selector: ':not([title])' };
const contextMenu = {
    menuComponent: { by: css, selector: '.mat-menu-panel' },
    options: {
        download: {
            by: css,
            selector: '#app\\.context\\.menu\\.download',
            entrySelector: '#app\\.context\\.menu\\.download span',
        },
        edit: {
            by: css,
            selector: '#app\\.context\\.menu\\.editFolder',
            entrySelector: '#app\\.context\\.menu\\.editFolder span',
        },
        favorite: {
            by: css,
            selector: '#app\\.context\\.menu\\.favorite\\.add',
            entrySelector: '#app\\.context\\.menu\\.favorite\\.add span',
        },
        move: {
            by: css,
            selector: '#app\\.context\\.menu\\.move',
            entrySelector: '#app\\.context\\.menu\\.move span',
        },
        copy: {
            by: css,
            selector: '.#app\\.context\\.menu\\.copy',
            entrySelector: '.#app\\.context\\.menu\\.copy span',
        },
        delete: {
            by: css,
            selector: '#app\\.context\\.menu\\.delete',
            entrySelector: '#app\\.context\\.menu\\.delete span',
        },
        permissions: {
            by: css,
            selector: '#app\\.context\\.menu\\.permissions',
            entrySelector: '#app\\.context\\.menu\\.permissions span',
        },
    },
};

const grid = {
    isDisplayed: () =>
        getElement(foldersGrid.by(foldersGrid.selector)).isDisplayed(),
    getFolderNames: () => {
        let foundFolders = [];
        getElements(folders.by(folders.selector)).then((folders) => {
            folders.forEach((folder) => {
                folder
                    .findElement(by.css('div[title="Name"]'))
                    .getText()
                    .then((text) => {
                        foundFolders.push(text);
                    });
            });
        });
        return foundFolders;
    },
    isFolderPresent: (name) =>
        new Promise((resolve, reject) => {
            let folderFound = null;
            getElements(testFolder.by(testFolder.selector))
                .then((folders) => {
                    folders.forEach((folder) => {
                        folder.getAttribute('title').then((title) => {
                            if (title === name) {
                                folder.getText().then((text) => {
                                    if (text === name) {
                                        folderFound = true;
                                    }
                                });
                            }
                        });
                    });
                })
                .then(() => {
                    if (folderFound === true) {
                        resolve(true);
                    } else {
                        resolve(false);
                    }
                });
        }),
    selectFolderByName: (name) =>
        getElement(
            targetFolder.by(
                `[data-automation-id="${name}"]${targetFolder.selector}`,
            ),
        ).click(),
    openContextMenu: (name) =>
        new Promise((resolve, reject) => {
            getElements(testFolder.by(testFolder.selector)).then((folders) => {
                folders.forEach((folder) => {
                    folder.getAttribute('title').then((title) => {
                        if (title === name) {
                            folder.getText().then((text) => {
                                if (text === name) {
                                    rightClick(folder);
                                    resolve(text);
                                }
                            });
                        }
                    });
                });
            });
        }),

    contextMenu: {
        isDisplayed: () =>
            getElement(
                contextMenu.menuComponent.by(
                    contextMenu.menuComponent.selector,
                ),
            ).isDisplayed(),
        options: {
            download: {
                isDisplayed: () =>
                    getElement(
                        contextMenu.options.download.by(
                            contextMenu.options.download.selector,
                        ),
                    ).isDisplayed(),
                getText: () =>
                    getElement(
                        contextMenu.options.download.by(
                            contextMenu.options.download.entrySelector,
                        ),
                    ).getText(),
                click: () =>
                    getElement(
                        contextMenu.options.download.by(
                            contextMenu.options.download.selector,
                        ),
                    ).click(),
            },

            edit: {
                isDisplayed: () =>
                    getElement(
                        contextMenu.options.edit.by(
                            contextMenu.options.edit.selector,
                        ),
                    ).isDisplayed(),
                getText: () =>
                    getElement(
                        contextMenu.options.edit.by(
                            contextMenu.options.edit.entrySelector,
                        ),
                    ).getText(),
                click: () =>
                    getElement(
                        contextMenu.options.edit.by(
                            contextMenu.options.edit.selector,
                        ),
                    ).click(),
            },

            favorite: {
                isDisplayed: () =>
                    getElement(
                        contextMenu.options.favorite.by(
                            contextMenu.options.favorite.selector,
                        ),
                    ).isDisplayed(),
                getText: () =>
                    getElement(
                        contextMenu.options.favorite.by(
                            contextMenu.options.favorite.entrySelector,
                        ),
                    ).getText(),
                click: () =>
                    getElement(
                        contextMenu.options.favorite.by(
                            contextMenu.options.favorite.selector,
                        ),
                    ).click(),
            },

            move: {
                isDisplayed: () =>
                    getElement(
                        contextMenu.options.move.by(contextMenu.options.move),
                    ).isDisplayed(),
                getText: () =>
                    getElement(
                        contextMenu.options.move.by(
                            contextMenu.options.move.entrySelector,
                        ),
                    ).getText(),
                click: () =>
                    getElement(
                        contextMenu.options.move.by(
                            contextMenu.options.move.selector,
                        ),
                    ).click(),
            },

            copy: {
                isDisplayed: () =>
                    getElement(
                        contextMenu.options.copy.by(
                            contextMenu.options.copy.selector,
                        ),
                    ).isDisplayed(),
                getText: () =>
                    getElement(
                        contextMenu.options.copy.by(
                            contextMenu.options.copy.entrySelector,
                        ),
                    ).getText(),
                click: () =>
                    getElement(
                        contextMenu.options.copy.by(
                            contextMenu.options.copy.selector,
                        ),
                    ).click(),
            },

            delete: {
                isDisplayed: () =>
                    getElement(
                        contextMenu.options.delete.by(
                            contextMenu.options.delete.selector,
                        ),
                    ).isDisplayed(),
                getText: () =>
                    getElement(
                        contextMenu.options.delete.by(
                            contextMenu.options.delete.entrySelector,
                        ),
                    ).getText(),
                click: () =>
                    getElement(
                        contextMenu.options.delete.by(
                            contextMenu.options.delete.selector,
                        ),
                    ).click(),
            },

            permissions: {
                isDisplayed: () =>
                    getElement(
                        contextMenu.options.permissions.by(
                            contextMenu.options.permissions.selector,
                        ),
                    ).isDisplayed(),
                getText: () =>
                    getElement(
                        contextMenu.options.permissions.by(
                            contextMenu.options.permissions.entrySelector,
                        ),
                    ).getText(),
                click: () =>
                    getElement(
                        contextMenu.options.permissions.by(
                            contextMenu.options.permissions.selector,
                        ),
                    ).click(),
            },
        },
    },
};

export default grid;
