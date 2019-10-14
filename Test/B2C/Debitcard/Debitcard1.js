import Environment from '../../../Pages/B2C/Environment.js';
import Product from '../../../Pages/B2C/Product.js';
import Search from '../../../Pages/B2C/Search.js';
import Navigation from '../../../Pages/B2C/Navigation.js';
import Checkout from "../../../Pages/B2C/Checkout";

describe('Debit card payment from a guest user', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
        Product.closeGoToCountry();
    });
    it('Go to a random section, Pick a product, Add to shopping bag', () => {
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
