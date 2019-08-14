import Environment from '../../../Pages/B2C/Environment.js';
import Product from '../../../Pages/B2C/Product.js';
import Search from '../../../Pages/B2C/Search.js';
import Navigation from '../../../Pages/B2C/Navigation.js';
import Checkout from "../../../Pages/B2C/Checkout";
import Givex from "../../../Pages/Givex";

let giftcard = '6338901547310003689';

describe(specname+' - Paypal and giftcard payment from a guest user', () => {
    it('Set up a gift card', () => {
        Givex.login();
        Givex.setupGiftcards(giftcard);
    });
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to a random section and add a product to the shopping bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag');
    });
    it('Go to the checkout as a guest and pay by paypal and giftcard', () => {
        Navigation.GoToCheckout();
        Checkout.addGiftcards(giftcard, "0692");
        Checkout.fillTheDeliveryFields();
        Checkout.payByPaypal();
    });
});
