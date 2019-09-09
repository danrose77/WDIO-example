import Environment from '../../Pages/B2C/Environment.js';
import OMS from "../../Pages/OMS";
import AdminPortal from "../../Pages/AdminPortal";

let SKULIST = ['2103026000148GVU002','2103026000148GVU003'];
let SKUQTY = 2000;
let ShipNode = '080';

describe(specname+' - setup sku stock for website', () => {
    it('Login to admin portal and set values in SQL tables', () => {
        console.log("*** - Admin portal login - ***");
        AdminPortal.login();
        let counter = 0;
        console.log("Input SQL:");
        while (counter !== SKULIST.length) {
            AdminPortal.ensureStockInFrontEnd(SKULIST[counter], SKUQTY);
            counter++;
        }
    });
});
describe(specname+' - setup sku stock for OMS', () => {
    it('Login to API tester and set values by XML submission', () => {
        console.log("*** - API tester - ***");
        Environment.openURL("https://sup-oms.qa.coc.ibmcloud.com/smcfs/yfshttpapi/yantrahttpapitester.jsp");
        let counter = 0;
        console.log("Input XML:");
        while (counter !== SKULIST.length) {
            OMS.inventoryAdjuster(SKULIST[counter], SKUQTY, ShipNode);
            counter++;
        }
    });
});
