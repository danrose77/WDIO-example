import Environment from '../../../Pages/Environment.js';
import Product from '../../../Pages/Product.js';
import Navigation from '../../../Pages/Navigation.js';
import Checkout from "../../../Pages/Checkout";
import Rundeck from "../../../Pages/Rundeck";
import OMS from "../../../Pages/OMS";
import Customer from "../../../Pages/Customer";

let SKU1 = '1020200500313OI6003';
let Qty1 = 1;
let username = 'danrosetest+ideal@gmail.com';

describe(specname+' - Line: Single - Quantity: Single - Payment: Ideal - Created -> Scheduled -> Released -> Shipped', () => {
    it('Set up a customer account for email '+username, () => {
        Environment.openBaseURL();
        Customer.setUpNewAccount(username);
    });
    it('Go to website and log in', () => {
        Environment.openBaseURL();
        Customer.signIn(username);
    });
    it('Go to SKU: '+SKU1+' and add ('+Qty1+') product to the shopping bag', () => {
        Environment.goToBasePlus('products/?sku='+SKU1);
        Product.SelectASizeAndAddTo('Bag', Qty1, true);
        Product.logUsedSKU(SKU1);
    });
    it('Go to the checkout as a guest and pay by Ideal', () => {
        Navigation.GoToCheckout();
        Checkout.selectLocalDelivery();
        Checkout.fillTheDeliveryFields();
        Checkout.payByIdeal();
    });
    it('Export order in Rundeck', () => {
        Rundeck.orderExport();
    });
    it('Go to OMS and retrieve order', () => {
        OMS.logIn();
        OMS.retrieveOrder();
    },);
    it('Then schedule order', () => {
        OMS.scheduleOrder();
    }, 9);
    it('Then release order', () => {
        OMS.releaseOrder();
    }, 9);
    it('Then logout of OMS', () => {
        OMS.logOut();
    });
    it('Then ship the order', () => {
        OMS.sterlingQueryForShipDetails();
        OMS.APITesterShipOrder();
    });
    it('Confirm shipped status', () => {
        OMS.logIn();
        OMS.retrieveOrder();
        OMS.checkForStatus('Shipped')
    },);
});
