import Environment from '../../../Pages/Environment.js';
import Product from '../../../Pages/Product.js';
import Search from '../../../Pages/Search.js';
import Navigation from '../../../Pages/Navigation.js';
import Checkout from "../../../Pages/Checkout";
import Customer from "../../../Pages/Customer";

let username = 'danrosetest+klarnaUS_user@gmail.com';

describe(specname+' - Klarna US pay in 4 payment from an existing user', () => {
    it('Set up a customer account', () => {
        Environment.openCountrySiteForColour('US');
        Customer.setUpNewAccount(username);
        Customer.addDeliveryAddress();
    });
    it('Go to website and log in', () => {
        Environment.openCountrySiteForColour('US');
        Customer.signIn(username);
    });
    it('Go to a random section and add a product to the shopping bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag');
    }, 3);
    it('Go to the checkout as a guest and pay by Klarna in 4', () => {
        Navigation.GoToCheckout();
        Checkout.payByKlarna('in4');
    });
});
