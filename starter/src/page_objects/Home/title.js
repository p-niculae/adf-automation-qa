import finders from '../../helpers/finders';
import getters from '../../helpers/getters';

const css = finders.css;
const getElement = getters.getElement;

const titleLabel = {
    by: css,
    selector: '.adf-app-title',
};

const title = {
    isDisplayed: () =>
        getElement(titleLabel.by(titleLabel.selector)).isDisplayed(),
    getText: () => getElement(titleLabel.by(titleLabel.selector)).getText(),
    click: () => getElement(titleLabel.by(titleLabel.selector)).click(),
};

export default title;
