import Environment from '../../Pages/B2C/Environment.js';
import Product from '../../Pages/B2C/Product.js';
import Navigation from '../../Pages/B2C/Navigation.js';
import Checkout from "../../Pages/B2C/Checkout";
import Rundeck from "../../Pages/Rundeck";
import OMS from "../../Pages/OMS";
import IBMse from "../../Pages/IBMse";

let SKU1 = '1020200500313OI6003';
let Qty1 = 1;

describe('Create order with a specific SKU', () => {
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
        OMS.checkForStatus('Shipped');
        OMS.logOut();
    },);
    it('Return the order in IBMse', () => {
        IBMse.login();
        IBMse.returnOrExchangeAnItem('exchange');
    },);
    it('Confirm Return Refunded status', () => {
        OMS.logIn();
        OMS.retrieveOrder();
        OMS.checkForStatus('Return Refunded');
        OMS.logOut();
    },);
    it('Get new details for exchange order', () => {
        OMS.logIn();
        OMS.getReturnsDetails();
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
        OMS.checkForStatus('Shipped');
        OMS.logOut();
    },);
});
