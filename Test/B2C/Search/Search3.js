import Environment from '../../../Pages/B2C/Environment.js';
import Search from '../../../Pages/B2C/Search.js';
import Navigation from "../../../Pages/B2C/Navigation";

describe('Search for a product and sort by lowest price', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Search for a term and sort by lowest price', () => {
        Navigation.randomSection();
        Search.OrderBy('Lowest Price');
    });
});
