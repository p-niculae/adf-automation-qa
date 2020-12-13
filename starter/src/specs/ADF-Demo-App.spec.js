const { browser } = require('protractor');
import LoginPage from '../page_objects/Login/LoginPage';
import HomePage from '../page_objects/Home/HomePage';

describe('ADF Demo App', () => {
    beforeEach(() => {
        browser.manage().timeouts().implicitlyWait(3000);
        browser.get('https://4ovcw1kj.trials.alfresco.com/');
    });

    it('passes the test scenario', () => {
        LoginPage.loginWith('guest@example.com', 'Password');
        HomePage.openMenu();
        HomePage.SideNav.menuPanel.createFolder.click();
        HomePage.CreateNewFolderDialog.waitForDialogOpen();
        expect(HomePage.CreateNewFolderDialog.isDisplayed()).toBe(true);
        expect(HomePage.CreateNewFolderDialog.title.getText()).toBe(
            'Create new folder',
        );
        HomePage.CreateNewFolderDialog.nameField.fillWith(
            'your Github username',
        );
        expect(HomePage.CreateNewFolderDialog.nameField.getText()).toBe(
            'your Github username',
        );
        HomePage.CreateNewFolderDialog.createButton.click();
        HomePage.CreateNewFolderDialog.waitForDialogClosed();
        expect(HomePage.isFolderPresent('your Github username')).toBe(true);
        HomePage.openMenu();
        HomePage.SideNav.menuPanel.createFolder.click();
        HomePage.CreateNewFolderDialog.waitForDialogOpen();
        expect(HomePage.CreateNewFolderDialog.isDisplayed()).toBe(true);
        expect(HomePage.CreateNewFolderDialog.title.getText()).toBe(
            'Create new folder',
        );
        HomePage.CreateNewFolderDialog.nameField.fillWith(
            'your Github username',
        );
        expect(HomePage.CreateNewFolderDialog.nameField.getText()).toBe(
            'your Github username',
        );
        HomePage.CreateNewFolderDialog.createButton.click();
        expect(HomePage.CreateNewFolderDialog.isDisplayed()).toBe(true);
        HomePage.waitForError();
        expect(HomePage.ErrorNotification.getText()).toBe(
            "There's already a folder with this name. Try a different name.",
        );
        HomePage.CreateNewFolderDialog.cancelButton.click();
        HomePage.CreateNewFolderDialog.waitForDialogClosed();
        HomePage.PersonalFiles.selectFolderByName('your Github username');
        HomePage.PersonalFiles.openContextMenu('your Github username');
        expect(HomePage.PersonalFiles.contextMenu.isDisplayed()).toBe(true);
        HomePage.PersonalFiles.contextMenu.options.delete.click();
        expect(HomePage.isFolderPresent('your Github username')).toBe(false);
    });
});
