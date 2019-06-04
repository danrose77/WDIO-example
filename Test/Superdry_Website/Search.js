import Environment from '../../Pages/Environment.js';
import Search from '../../Pages/Search.js';
import Navigation from "../../Pages/Navigation";

describe('Search.js - Search for a product,select a random filter and sort by highest price', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Search for a term, select a filter option and sort by highest price', () => {
        Search.searchFor('Jacket');
        Search.selectFilter();
        Search.OrderBy('Highest Price');
    });
});

describe('Search.js - Search for a product and filter by colour', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Search for a term and select two filter options', () => {
        Search.searchFor('Jacket');
        Search.selectFilter('gender');
        Search.selectFilter('colour');
    });
});

describe('Search.js - Search for a product and sort by lowest price', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Search for a term and sort by lowest price', () => {
        Navigation.randomSection();
        Search.OrderBy('Lowest Price');
    });
});
