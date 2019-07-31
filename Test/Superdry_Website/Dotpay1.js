import Environment from '../../Pages/Environment.js';
import Product from '../../Pages/Product.js';
import Search from '../../Pages/Search.js';
import Navigation from '../../Pages/Navigation.js';
import Checkout from "../../Pages/Checkout";
import Customer from "../../Pages/Customer";

/*
DOTPAY available on PL site only.
*/

let username = 'danrosetest+dotpay@gmail.com';

describe(specname+' - Dotpay payment from an existing user', () => {
    it('Set up a customer account for email '+username, () => {
        Environment.openCountrySiteForColour('PL');
        Customer.setUpNewAccount(username);
    });

    it('Go to website and log in', () => {
        Environment.openCountrySiteForColour('PL');
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
    it('Pay by Dotpay', () => {
        Checkout.payByDotpay();
    });
});
