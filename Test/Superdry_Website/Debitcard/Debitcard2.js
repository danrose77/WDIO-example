import Environment from '../../../Pages/Environment.js';
import Product from '../../../Pages/Product.js';
import Search from '../../../Pages/Search.js';
import Navigation from '../../../Pages/Navigation.js';
import Checkout from "../../../Pages/Checkout";
import Customer from "../../../Pages/Customer";

describe(specname+' - Debit card payment from a new user', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Set up a customer account', () => {
        Customer.setUpNewAccount();
    });
    it('Go to a random section and add a product to the shopping bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag');
    }, 3);
    it('Go to the checkout as a guest and pay by card', () => {
        Navigation.GoToCheckout();
        Checkout.payByCard();
    });
});
