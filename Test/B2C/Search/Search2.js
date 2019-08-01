import Environment from '../../../Pages/Environment.js';
import Search from '../../../Pages/Search.js';
import Navigation from "../../../Pages/Navigation";

describe(specname+' - Search for a product and filter by colour', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Search for a term and select two filter options', () => {
        Search.searchFor('Jacket');
        Search.selectFilter('gender');
        Search.selectFilter('colour');
    });
});
