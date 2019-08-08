import Environment from '../../../Pages/Environment.js';
import Navigation from "../../../Pages/Navigation";
import VizCheck from "../../../functions/VizCheck";
import GetRandom from "../../../functions/GetRandom";

describe('Visual Regression test for ' + specname, () => {
    it('Open the ' + specname, () => {
        Environment.openBaseURL();
    });
    it('Visual Regression test - HamburgerIcon', () => {
        VizCheck.element(Navigation.hamburger,specname + '-HamburgerIcon');
    });
    it('Visual Regression test - ShoppingBagIcon', () => {
        VizCheck.element(Navigation.RD2019_shoppingBagIcon,specname + '-ShoppingBagIcon');
    });
    it('Visual Regression test - CenterLogo', () => {
        VizCheck.element(Navigation.logo,specname + '-CenterLogo');
    });
    it('Visual Regression test - MyAccountIcon', () => {
        VizCheck.element(Navigation.my_account,specname + '-MyAccountIcon');
    });
    it('Visual Regression test - FavouritesIcon', () => {
        VizCheck.element(Navigation.favourites,specname + '-FavouritesIcon');
    });
    it('Visual Regression test - SearchIcon', () => {
        VizCheck.element(Navigation.search_container,specname + '-SearchIcon');
    });
    it('Visual Regression test - ' + specname + ' Sidebar', () => {
        Navigation.hamburger.click();
        Navigation.acceptCookiesPrompt();
        let shotName = specname + '-Sidebar';
        VizCheck.page(shotName, 10);
    });
    it('Visual Regression test - ' + specname + ' MenuLevel1', () => {
        Navigation.backToBaseMenu();
        Navigation.menu_tier1[1].waitForExist();
        Navigation.menu_tier1[2].click();
        let shotName = specname + '-MenuLevel1';
        VizCheck.page(shotName, 2);
    });
});
