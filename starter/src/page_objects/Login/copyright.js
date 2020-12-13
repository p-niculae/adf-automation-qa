import finders from '../../helpers/finders';
import getters from '../../helpers/getters';

const automationId = finders.automationId;
const getElement = getters.getElement;

const copyrightLabel = {
    by: automationId,
    selector: 'login-copyright',
};

const copyright = {
    isDisplayed: () =>
        getElement(copyrightLabel.by(copyrightLabel.selector)).isDisplayed(),
    getText: () =>
        getElement(copyrightLabel.by(copyrightLabel.selector)).getText(),
};

export default copyright;
