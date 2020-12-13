import finders from '../../helpers/finders';
import getters from '../../helpers/getters';

const css = finders.css;
const getElement = getters.getElement;

const notificationComponent = {
    by: css,
    selector: 'simple-snack-bar',
};

const notification = {
    isDisplayed: () =>
        getElement(
            notificationComponent.by(notificationComponent.selector),
        ).isDisplayed(),
    waitForPop: () => {
        browser.manage().timeouts().implicitlyWait(0);
        browser.wait(
            ExpectedConditions.visibilityOf($(notificationComponent.selector)),
            1500,
            'Timed out waiting for notification to be visible',
        );
        browser.manage().timeouts().implicitlyWait(3000);
    },
    waitForFade: () => {
        browser.manage().timeouts().implicitlyWait(0);
        browser.wait(
            ExpectedConditions.invisibilityOf(
                $(notificationComponent.selector),
            ),
            6000,
            'Timed out waiting for notification to fade',
        );
        browser.manage().timeouts().implicitlyWait(3000);
    },
    click: () =>
        getElement(
            notificationComponent.by(notificationComponent.selector),
        ).click(),
    getText: () =>
        getElement(
            notificationComponent.by(notificationComponent.selector),
        ).getText(),
};

export default notification;
