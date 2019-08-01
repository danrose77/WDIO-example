import Environment from '../../../Pages/Environment.js';
import Product from '../../../Pages/Product.js';
import Search from '../../../Pages/Search.js';
import Navigation from '../../../Pages/Navigation.js';
import Checkout from "../../../Pages/Checkout";
import Givex from "../../../Pages/Givex";

let giftcard = '6338901547310003689';

// If a mobile test giftcard needs to be set up with script "./test/setupGiftcard.js"

describe(specname+' - Debit card and Gift card payment from a guest user', () => {
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
    it('Go to the checkout as a guest and pay by card and giftcard', () => {
        Navigation.GoToCheckout();
        Checkout.addGiftcards(giftcard, "0692");
        Checkout.fillTheDeliveryFields();
        Checkout.payByCard();
    });
});
