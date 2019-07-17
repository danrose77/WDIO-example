import Environment from '../../Pages/Environment.js';
import Product from '../../Pages/Product.js';
import Navigation from '../../Pages/Navigation.js';
import Checkout from "../../Pages/Checkout";
import Rundeck from "../../Pages/Rundeck";
import OMS from "../../Pages/OMS";

let SKU1 = '1020200500313OI6003';
let Qty1 = 1;

describe(specname+' - Create order with a specific SKU', () => {
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
        Environment.openURL('https://sup-oms.qa.coc.ibmcloud.com/isccs/isccs/login.do?scFlag=Y');
        OMS.logIn();
        OMS.retrieveOrder();
    },);
    it('Then schedule order', () => {
        OMS.scheduleOrder();
    }, 9);
    it('Then release order', () => {
        OMS.releaseOrder();
    }, 9);
    it('Then apply a hold to the order', () => {
        OMS.applyOrderHold();
    }, 9);
    it('Then logout of OMS', () => {
        OMS.logOut();
    });
    it('Then ship the order', () => {
        OMS.sterlingQueryForShipDetails();
        OMS.APITesterShipOrder(true);
    });
    it('Confirm cancelled status', () => {
        OMS.logIn();
        OMS.retrieveOrder();
        OMS.checkForStatus('Cancelled')
    },);
});
