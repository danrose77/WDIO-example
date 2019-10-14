import Environment from '../../Pages/B2C/Environment.js';
import Navigation from '../../Pages/B2C/Navigation';
import Search from '../../Pages/B2C/Search';
import Product from '../../Pages/B2C/Product';
import Checkout from '../../Pages/B2C/Checkout';

describe('Debit card payment from a guest user', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
});
