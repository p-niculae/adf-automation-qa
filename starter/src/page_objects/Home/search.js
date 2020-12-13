import finders from '../../helpers/finders';
import getters from '../../helpers/getters';

const css = finders.css;
const getElement = getters.getElement;

const searchComponent = {
    by: css,
    selector: 'aca-search-input',
};
const searchField = {
    by: css,
    selector: 'aca-search-input input',
};
const searchButton = {
    by: css,
    selector: 'aca-search-input button',
};

const search = {
    isDisplayed: () =>
        getElement(searchComponent.by(searchComponent.selector)).isDisplayed(),
    click: () =>
        getElement(searchComponent.by(searchComponent.selector)).click(),
    getText: () => getElement(searchField.by(searchField.selector)).getText(),
    fillWith: (text) =>
        getElement(searchField.by(searchField.selector)).sendKeys(text),
    search: () => getElement(searchButton.by(searchButton.selector)).click(),
};

export default search;
