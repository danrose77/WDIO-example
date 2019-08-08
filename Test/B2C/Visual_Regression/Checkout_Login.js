import VizCheck from "../../../functions/VizCheck";

describe('Visual Regression test for ' + specname, () => {

    it('Open the ' + specname, () => {
        browser.url(site + 'checkout/log-in');
        browser.pause(1500);
    });
    it('Visual Regression test - ' + specname, () => {
        VizCheck.fullPage(specname, 1);
    });
});
