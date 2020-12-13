import finders from '../../helpers/finders';
import getters from '../../helpers/getters';

const css = finders.css;
const getElement = getters.getElement;

const logoComponent = {
    by: css,
    selector: '.adf-app-logo',
};

const logo = {
    isDisplayed: () =>
        getElement(logoComponent.by(logoComponent.selector)).isDisplayed(),
    click: () => getElement(logoComponent.by(logoComponent.selector)).click(),
};

export default logo;
