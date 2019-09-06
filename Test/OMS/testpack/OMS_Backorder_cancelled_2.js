import Environment from '../../../Pages/B2C/Environment.js';
import Product from '../../../Pages/B2C/Product.js';
import Navigation from '../../../Pages/B2C/Navigation.js';
import Checkout from "../../../Pages/B2C/Checkout";
import Rundeck from "../../../Pages/Rundeck";
import OMS from "../../../Pages/OMS";

let SKU1 = '102020200021802A004';
let Qty1 = 1;

describe(specname+' - Create order with a specific SKU, and cancel from backordered status', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to SKU: '+SKU1+' and add ('+Qty1+') product to the shopping bag', () => {
        Environment.goToBasePlus('products/?sku='+SKU1);
        Product.SelectASizeAndAddTo('Bag', Qty1, true);
        Product.logUsedSKU(SKU1);
    });
    it('Go to the checkout as a guest and pay by card', () => {
        Navigation.GoToCheckout();
        Checkout.selectLocalDelivery();
        Checkout.fillTheDeliveryFields();
        Checkout.payByCard();
    });
    it('Export order in Rundeck', () => {
        Rundeck.orderExport();
    });
    it('Go to OMS and retrieve order', () => {
        OMS.logIn();
        OMS.retrieveOrder();
    },);
    it('Then cancel the order', () => {
        OMS.cancelOrder();
    }, 9);
});
