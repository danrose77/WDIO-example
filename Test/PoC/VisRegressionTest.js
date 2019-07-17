import Environment from '../../Pages/Environment.js';

describe(specname+' - Debit card payment from a guest user', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
        browser.saveElement($('.account-actions .my-account'), 'firstButtonElement', { /* some options*/ });
        assert.equal((browser.checkElement($('.account-actions .my-account'), 'firstButtonElement', { /* some options*/ })), 0);
    });
});
