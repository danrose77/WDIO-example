import VizCheck from "../../../functions/VizCheck";
import Navigation from "../../../Pages/B2C/Navigation";
import Environment from "../../../Pages/B2C/Environment";
import Search from "../../../Pages/B2C/Search";
import Product from "../../../Pages/B2C/Product";

describe('Visual Regression test for ' + specname, () => {

    it('Open the ' + specname, () => {
        Environment.openBaseURL();
        Navigation.randomSection();
        Search.PickRandomProduct();
        Product.SelectASizeAndAddTo('Bag');
        browser.url(site + 'checkout');
        browser.pause(1500);
    });
    /*
    // Full page check more likely to generate false positive diffs so commented out
    it('Visual Regression test - ' + specname, () => {
        VizCheck.fullPage(specname, 1);
    });
    */
    it('Visual Regression test - OrderSummary', () => {
        Navigation.OrderSummary.scrollIntoView();
        VizCheck.element(Navigation.OrderSummary,specname + '-OrderSummary',2);
    });
    it('Visual Regression test - checkout_section_giftcard_voucher', () => {
        Navigation.checkout_section_giftcard_voucher.scrollIntoView();
        VizCheck.element(Navigation.checkout_section_giftcard_voucher,specname + '-checkout_section_giftcard_voucher',1,Navigation.navWrapper);
    });
    it('Visual Regression test - checkout_section_basket_summary', () => {
        Navigation.checkout_section_basket_summary.scrollIntoView();
        VizCheck.element(Navigation.checkout_section_basket_summary,specname + '-checkout_section_basket_summary',20);
    });
    it('Visual Regression test - checkout_section_delivery_options', () => {
        Navigation.checkout_section_delivery_options.scrollIntoView();
        VizCheck.element(Navigation.checkout_section_delivery_options,specname + '-checkout_section_delivery_options',2);
    });
    it('Visual Regression test - checkout_section_billing_address', () => {
        Navigation.checkout_section_billing_address.scrollIntoView();
        VizCheck.element(Navigation.checkout_section_billing_address,specname + '-checkout_section_billing_address',1,Navigation.navWrapper);
    });

    it('Visual Regression test - checkout_section_payment_methods', () => {
        Navigation.checkout_section_payment_methods.scrollIntoView();
        VizCheck.element(Navigation.checkout_section_payment_methods,specname + '-checkout_section_payment_methods',2);
    });
});
