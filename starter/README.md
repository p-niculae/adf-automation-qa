## Prerequisites

-   install Node
-   `npm install` to install the project dependencies
-   Google Chrome is also needed locally to run the tests against

**_Explanation_**

-   Configured babel to allow usage of import/export syntax
-   Provided option to connect directly to the local chromedriver when running the example spec
-   Added prettier to allow basic formatting with `npm run format`
-   Added to the solution the page objects directory, where we keep elements grouped into objects or pages so that we can import them where needed. This also contains the functions needed for the tests to be written in a more readable, less verbose way. The test does not interact with the elements directly, instead it calls page objects functions that do, to abstract away the browser interaction mechanisms. Most elements have wrappers that can be used to assert if they're available on the page, get their displayed text, or click. Page objects are grouped in such a way so that we find elements actions available only where we need them, that is, on the page where they appear. ALso, a number of convenience methods are provided to shorten the test spec. Selectors used were `by.css('some_css_value')` and `by.css('[data-automation-id="some_custom_value"]')`.

## Description

-   Firstly install dependencies with `npm install`
-   For the current example we're going to be using the local chromedriver instead of connecting to a selenium server, as specified through the config option `directConnect: true`
-   Execute `npm run drivers:update` to update drivers to latest versions; I am assuming Chrome is also updated to the latest version
-   Lastly, run `npm run end-to-end-test:chrome:local` to run the example test
