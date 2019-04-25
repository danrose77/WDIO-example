import Environment from '../component_objects/Environment.js';
import Product from '../component_objects/Product.js';
import Search from '../component_objects/Search.js';

describe('Second one: Load page and search', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Search and return a product', () => {
        Search.searchFor('Jacket');
        Search.OrderBy('Lowest Price');
        Search.PickRandomProduct();
    });
    it('Contains elements of a product page', () => {
        Product.checkPageElements();
    });
});
