import Environment from '../../../Pages/Environment.js';
import Search from '../../../Pages/Search.js';
import Navigation from "../../../Pages/Navigation";

describe(specname+' - Search for a product,select a random filter and sort by highest price', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Search for a term, select a filter option and sort by highest price', () => {
        Search.searchFor('Jacket');
        Search.selectFilter();
        Search.OrderBy('Highest Price');
    });
});
