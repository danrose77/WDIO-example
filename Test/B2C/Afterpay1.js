import Environment from '../../Pages/Environment.js';
import Product from '../../Pages/Product.js';
import Search from '../../Pages/Search.js';
import Navigation from '../../Pages/Navigation.js';
import Checkout from "../../Pages/Checkout";
import Customer from "../../Pages/Customer";

/*
AFTERPAY available on NL site only.
Current issue with android and iOS - run on chrome only until resolved (Manual test on mobile platforms pass fine).
*/

let username = 'danrosetest+afterpay@gmail.com';

describe(specname+' - Afterpay payment from an existing user', () => {

    it('Set up a customer account for email '+username, () => {
        Environment.openCountrySiteForColour('NL');
        Customer.setUpNewAccount(username);
    });

    it('Go to website and log in', () => {
        Environment.openCountrySiteForColour('NL');
        Customer.signIn(username);
    });

    it('Go to a random section and add a product to the shopping bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag');
    }, 3);

    it('Go to the checkout as a guest', () => {
        Navigation.GoToCheckout();
    });
    it('Pay by afterpay', () => {
        Checkout.payByAfterpay();
    });
});
