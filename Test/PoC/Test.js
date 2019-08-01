import Environment from '../../Pages/Environment.js';
import Navigation from "../../Pages/Navigation";

describe(specname + ' - Check all menu links', () => {
    it('Open the environment', () => {
        Environment.openBaseURL();
    });
    it('Visual Regression test - HamburgerIcon', () => {
        this.VizCheck(Navigation.hamburger,'HamburgerIcon');
    });
    it('Visual Regression test - ShoppingBagIcon', () => {
        this.VizCheck(Navigation.RD2019_shoppingBagIcon,'ShoppingBagIcon');
    });
    it('Visual Regression test - CenterLogo', () => {
        this.VizCheck(Navigation.logo,'CenterLogo');
    });
    it('Visual Regression test - MyAccountIcon', () => {
        this.VizCheck(Navigation.my_account,'MyAccountIcon');
    });
    it('Visual Regression test - FavouritesIcon', () => {
        this.VizCheck(Navigation.favourites,'FavouritesIcon');
    });
    it('Visual Regression test - SearchIcon', () => {
        this.VizCheck(Navigation.search_container,'SearchIcon');
    });
                    
});
