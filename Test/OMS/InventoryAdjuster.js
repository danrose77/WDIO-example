import Environment from '../../Pages/B2C/Environment.js';
import OMS from "../../Pages/OMS";
import AdminPortal from "../../Pages/AdminPortal";

let SKULIST = ['210302500010626C001',
'2102421500481GEQ006',
'210302500010626C001',
'2102421500481GEQ006',
'2103026000131BF3002',
'210302700013602A001',
'2103027000123CA2002',
'212403500004002A001'];

let SKUQTY = 2000;
let ShipNode = '080';

describe('setup sku stock for website', () => {
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
describe('setup sku stock for OMS', () => {
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
