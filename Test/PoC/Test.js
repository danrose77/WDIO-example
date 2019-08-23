
describe(specname+' - end to end smoke test script for B2B', () => {
    it('Open the environment', () => {
        browser.url('/login');
    });
    it('Get products in bag', () => {
        let string = 'qwerty"123456';
        string = string.replace('"','\\"');
        console.log(string);
    });

});
