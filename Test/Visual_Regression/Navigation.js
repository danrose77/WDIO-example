import Environment from '../../Pages/B2C/Environment.js';
import Navigation from "../../Pages/B2C/Navigation";
import VizCheck from "../../functions/VizCheck";

describe('Visual Regression test for ' + specname, () => {
    it('Open the ' + specname, () => {
        Environment.openBaseURL();
    });
    it('Visual Regression test - store_locator__input', () => {
        VizCheck.element(Navigation.navWrapper,specname + '-NavWrapper');
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

    it('Visual Regression test - footer', () => {
        let footer = $('footer');
        footer.scrollIntoView();
        VizCheck.element(footer,specname + '-footer');
    });
    it('Visual Regression test - copyright_row', () => {
        let copyright_row = $('.copyright-row');
        copyright_row.scrollIntoView();
        VizCheck.element(copyright_row,specname + '-copyright-row', 0, Navigation.navWrapper);
    });
    it('Visual Regression test - ' + specname + ' Sidebar', () => {
        Navigation.hamburger.click();
        Navigation.acceptCookiesPrompt();
        VizCheck.element($('#menu-pop-in'),specname + '-Sidebar');

    });
    it('Visual Regression test - ' + specname + ' Womens', () => {
        Environment.openBaseURL();
        Navigation.hamburger.click();
        Navigation.acceptCookiesPrompt();
        let womenslink = $("img[src*='parent-womens.jpg']");
        womenslink.waitForExist();
        womenslink.click();
        VizCheck.element($('#menu-pop-in'),specname + '-Sidebar-Womens');
    });
    it('Visual Regression test - ' + specname + ' Mens', () => {
        Environment.openBaseURL();
        Navigation.hamburger.click();
        Navigation.acceptCookiesPrompt();
        let menslink = $("img[src*='parent-mens.jpg']");
        menslink.waitForExist();
        menslink.click();
        VizCheck.element($('#menu-pop-in'),specname + '-Sidebar-Mens');
    });
});
