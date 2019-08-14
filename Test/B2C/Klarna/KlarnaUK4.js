import Environment from '../../../Pages/B2C/Environment.js';
import Product from '../../../Pages/B2C/Product.js';
import Search from '../../../Pages/B2C/Search.js';
import Navigation from '../../../Pages/B2C/Navigation.js';
import Checkout from "../../../Pages/B2C/Checkout";
import Customer from "../../../Pages/B2C/Customer";
import AdminPortal from "../../../Pages/AdminPortal";

let username = 'danrosetest+klarnaUK_user@gmail.com';

describe(specname+' - Klarna UK pay later payment from a guest user, with paid delivery', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to a random section and add a product to the shopping bag', () => {
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag');
    }, 3);
    it('Go to the checkout as a guest and pay by Klarna', () => {
        Navigation.GoToCheckout();
        Checkout.fillTheDeliveryFields();
        Checkout.payByKlarna();
    });
});
