import Environment from '../../../../Pages/B2C/Environment.js';
import Product from '../../../../Pages/B2C/Product.js';
import Navigation from '../../../../Pages/B2C/Navigation.js';
import Checkout from "../../../../Pages/B2C/Checkout";
import Rundeck from "../../../../Pages/Rundeck";
import OMS from "../../../../Pages/OMS";
import AdminPortal from "../../../../Pages/AdminPortal";

let SKU1 = '1020200500313OI6003';
let Qty1 = 2;
let SKU2 = '1040405000250ZJ9001';
let Qty2 = 2;

describe(specname+' - setup test', () => {
    it('Set up in admin portal', () => {
        Environment.openBaseURL();
        AdminPortal.login();
        AdminPortal.disableCaptcha();
        AdminPortal.ensureStockInFrontEnd(SKU1);
        AdminPortal.ensureStockInFrontEnd(SKU2);
        AdminPortal.colOrderPrefix(true);
        Environment.openURL("https://sup-oms.qa.coc.ibmcloud.com/smcfs/yfshttpapi/yantrahttpapitester.jsp");
        OMS.inventoryAdjuster(SKU1, 0, '080');
        OMS.inventoryAdjuster(SKU1, 0, '090');
        OMS.inventoryAdjuster(SKU1, 1000, '110');
        OMS.inventoryAdjuster(SKU2, 1000, '080');
        OMS.inventoryAdjuster(SKU2, 0, '090');
        OMS.inventoryAdjuster(SKU2, 0, '110');
    });
});

describe(specname+' - Line: Multi - Quantity: Multi - Payment: Card - Created -> Scheduled -> Released -> Shipped', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Go to SKU: '+SKU1+' and add ('+Qty1+') product to the shopping bag', () => {
        Environment.goToBasePlus('products/?sku='+SKU1);
        Product.SelectASizeAndAddTo('Bag', Qty1, true);
        Product.logUsedSKU(SKU1);
    });
    it('Go to SKU: '+SKU2+' and add ('+Qty2+') product to the shopping bag', () => {
        Environment.goToBasePlus('products/?sku='+SKU2);
        Product.SelectASizeAndAddTo('Bag', Qty2, true);
        Product.logUsedSKU(SKU2);
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
        OMS.checkForStatus('Shipped')
    },);
    it('OMS logout', () => {
        OMS.logOut();
    },);
});

describe(specname+' - post run for environment', () => {
    it('Change colour prefix back', () => {
        Environment.openBaseURL();
        AdminPortal.login();
        AdminPortal.colOrderPrefix(false);
    });
});
