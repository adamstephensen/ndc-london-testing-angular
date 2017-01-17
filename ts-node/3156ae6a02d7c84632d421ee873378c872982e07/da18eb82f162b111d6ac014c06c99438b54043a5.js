"use strict";
const protractor_1 = require('protractor');
describe(`Page: Joke Page`, () => {
    it(`should have a titile of 'Chuck Norris Jokes'`, () => {
        protractor_1.browser.get('/');
        const title = protractor_1.element(protractor_1.by.css('h1')).getText();
        expect(title).toEqual('Chuck Norris Jokes');
    });
    it(`should have a different second Joke`, () => {
        protractor_1.browser.get('/');
        const joke1 = protractor_1.element(protractor_1.by.css('p')).getText();
        protractor_1.element(protractor_1.by.css('button')).click();
        const joke2 = protractor_1.element(protractor_1.by.css('p')).getText();
        expect(joke1).toEqual(joke2);
    });
});
//# sourceMappingURL=/Users/duncanhunter/presentations/ndc-london-testing-angular/ts-node/3156ae6a02d7c84632d421ee873378c872982e07/da18eb82f162b111d6ac014c06c99438b54043a5.js.map