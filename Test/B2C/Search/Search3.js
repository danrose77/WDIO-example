import Environment from '../../../Pages/Environment.js';
import Search from '../../../Pages/Search.js';
import Navigation from "../../../Pages/Navigation";

describe(specname+' - Search for a product and sort by lowest price', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Search for a term and sort by lowest price', () => {
        Navigation.randomSection();
        Search.OrderBy('Lowest Price');
    });
});
