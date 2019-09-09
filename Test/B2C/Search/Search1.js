import Environment from '../../../Pages/B2C/Environment.js';
import Search from '../../../Pages/B2C/Search.js';
import Navigation from "../../../Pages/B2C/Navigation";

describe(specname+' - Search for a product,select a random filter and sort by highest price', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Search for a term, select a filter option and sort by highest price', () => {
        Search.searchFor('Jacket');
        // When new category page goes live the below function is to be swapped for the commented function:
        //Search.selectFilter();
        Search.selectFilterDropDown(1);
        Search.OrderBy('Highest Price');
    });
});
