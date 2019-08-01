import Environment from '../../../Pages/Environment.js';
import Navigation from "../../../Pages/Navigation";
import VizCheck from "../../../functions/VizCheck";
import Search from "../../../Pages/Search";

let searchTerm = 'Shirt';

describe('Visual Regression test for ' + specname, () => {

    it('Open the ' + specname + ' for ' + searchTerm, () => {
        Environment.openBaseURL();
        Search.searchFor(searchTerm);
    });
    it('Visual Regression test - HamburgerIcon', () => {
        VizCheck.element(Navigation.hamburger,'HamburgerIcon');
    });
    it('Visual Regression test - ShoppingBagIcon', () => {
        VizCheck.element(Navigation.RD2019_shoppingBagIcon,'ShoppingBagIcon');
    });
    it('Visual Regression test - CenterLogo', () => {
        VizCheck.element(Navigation.logo,'CenterLogo');
    });
    it('Visual Regression test - MyAccountIcon', () => {
        VizCheck.element(Navigation.my_account,'MyAccountIcon');
    });
    it('Visual Regression test - FavouritesIcon', () => {
        VizCheck.element(Navigation.favourites,'FavouritesIcon');
    });
    it('Visual Regression test - SearchIcon', () => {
        VizCheck.element(Navigation.search_container,'SearchIcon');
    });
    it('Visual Regression test - ' + specname, () => {
        VizCheck.page(specname, 25);
    });
});
