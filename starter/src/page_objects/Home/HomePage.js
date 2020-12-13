import { protractor } from 'protractor/built/ptor';
import logo from './logo';
import search from './search';
import title from './title';
import sideNav from './sideNav';
import createNewFolderDialog from './createNewFolder';
import personalFiles from './personalFiles';
import errorNotification from './errorNotification';
import deleteNotification from './deleteNotification';

const HomePage = {
    Logo: logo,
    Search: search,
    Title: title,
    SideNav: sideNav,
    CreateNewFolderDialog: createNewFolderDialog,
    PersonalFiles: personalFiles,
    ErrorNotification: errorNotification,
    DeleteNotification: deleteNotification,

    openMenu: () => sideNav.createButton.click(),
    closeMenu: () => sideNav.createButton.forceClick(),
    getAvailableActions: () => {
        var deferred = protractor.promise.defer();
        const actions = sideNav.menuPanel.getOptions();
        if (actions) deferred.fulfill(actions);
        else deferred.reject(actions);
        return deferred.promise;
    },
    createWith: (name, description) => {
        createNewFolderDialog.nameField.fillWith(name);
        createNewFolderDialog.descriptionField.fillWith(description);
        createNewFolderDialog.createButton.click();
    },
    getFolders: () => {
        let deferred = protractor.promise.defer();
        let folders = personalFiles.getFolderNames();
        if (folders) deferred.fulfill(folders);
        else deferred.reject(folders);
        return deferred.promise;
    },
    isFolderPresent: (name) => {
        let deferred = protractor.promise.defer();
        let found = personalFiles.isFolderPresent(name);
        if (found) deferred.fulfill(found);
        else deferred.reject(found);
        return deferred.promise;
    },
    selectFolder: (name) => personalFiles.selectFolderByName(name),
    waitForError: () => {
        let deferred = protractor.promise.defer();
        errorNotification.waitForPop();
        deferred.fulfill(true);
        return deferred.promise;
    },
    waitForErrorToFade: () => {
        let deferred = protractor.promise.defer();
        errorNotification.waitForFade();
        deferred.fulfill(true);
        return deferred.promise;
    },
    waitForConfirmation: () => {
        let deferred = protractor.promise.defer();
        deleteNotification.waitForPop();
        deferred.fulfill(true);
        return deferred.promise;
    },
};

export default HomePage;
