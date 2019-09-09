import Environment from '../../Pages/B2C/Environment.js';
import Navigation from '../../Pages/B2C/Navigation';
import Search from '../../Pages/B2C/Search';
import Product from '../../Pages/B2C/Product';
import Checkout from '../../Pages/B2C/Checkout';

describe(specname+' - Debit card payment from a guest user', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to a random section and add a product to the shopping bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag');
    }, 3);
    it('Go to the checkout as a guest', () => {
        Navigation.GoToCheckout();
    });
    it('Pay by card', () => {
        Checkout.fillTheDeliveryFields();
        Checkout.payByCard();
    });
});
