import Environment from '../../../Pages/Environment.js';
import Checkout from "../../../Pages/Checkout";

describe(specname+' - Place an order with click and collect delivery type option', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Select a product with delivery type options', () => {
        Checkout.selectProductWithDeliveryTypeOptions();
        Checkout.selectClickAndCollectAndPay();
    });
});
