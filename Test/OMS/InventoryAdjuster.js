import Environment from '../../Pages/B2C/Environment.js';
import OMS from "../../Pages/OMS";

describe(specname+' - Debit card payment from a guest user', () => {
    it('Open the environment', () => {
        Environment.openURL("https://sup-oms.qa.coc.ibmcloud.com/smcfs/yfshttpapi/yantrahttpapitester.jsp");
    });
    it('Do a thing', () => {
        OMS.inventoryAdjuster('2103026000148GVU002', '2000', '080');
    });
});
