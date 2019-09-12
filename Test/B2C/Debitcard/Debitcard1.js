import Environment from '../../../Pages/B2C/Environment.js';
import Product from '../../../Pages/B2C/Product.js';
import Search from '../../../Pages/B2C/Search.js';
import Navigation from '../../../Pages/B2C/Navigation.js';
import Checkout from "../../../Pages/B2C/Checkout";
import write from "../../../functions/write";
import Rundeck from "../../../Pages/Rundeck";
import OMS from "../../../Pages/OMS";

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
    it('Export order in Rundeck', () => {
        Rundeck.orderExport();
        Rundeck.logout();
    });
    it('Go to OMS and retrieve order', () => {
        OMS.logIn();
        OMS.retrieveOrder();
        OMS.logOut();
        write.jsonOrderFiles('ZALANDOzaat_');
    },);
});


