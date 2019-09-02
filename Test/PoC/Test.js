import Environment from '../../Pages/B2C/Environment.js';
import Navigation from '../../Pages/B2C/Navigation.js';

describe(specname+' - Debit card payment from a guest user', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to a random section and add a product to the shopping bag', () => {
        Navigation.randomSection();
    }, 3);
    it('Do a thing', () => {
        let elements = $$('label[for^="facetName"]');
        let NumElements = elements.length;
        NumElements--;
        while (NumElements !== 0) {
            console.log(elements[NumElements].getHTML(false));
            NumElements--;
        }
    });
});
