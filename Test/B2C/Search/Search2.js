import Environment from '../../../Pages/B2C/Environment.js';
import Search from '../../../Pages/B2C/Search.js';
import Navigation from "../../../Pages/B2C/Navigation";

describe(specname+' - Search for a product and filter by colour', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Search for a term and select two filter options', () => {
        Search.searchFor('Jacket');
        // When new category page goes live the below function is to be swapped for the commented function:
        //Search.selectFilter('gender');
         Search.selectFilterDropDown(2);
        //Search.selectFilter('colour');
         Search.selectFilterDropDown(3);
    });
});
