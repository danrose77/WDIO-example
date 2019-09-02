import Environment from '../../Pages/B2C/Environment.js';
import Navigation from "../../Pages/B2C/Navigation";
import VizCheck from "../../functions/VizCheck";
import Search from "../../Pages/B2C/Search";
import Product from "../../Pages/B2C/Product";
import GetRandom from "../../functions/GetRandom";

describe('Visual Regression test for ' + specname, () => {
    it('Open the product page for Jeans' + specname, () => {
        Environment.openBaseURL();
        Search.searchFor('Jean');
        Search.PickRandomProduct();
        let dropdownfound = false;
        while (dropdownfound === false) {
            if (Product.SizeSelectorDD.isDisplayed() === true) {
                dropdownfound = true;
            } else {
                Environment.openBaseURL();
                Search.searchFor('Jean');
                Search.PickRandomProduct();
            }
        }
    });
    /*
    // Full page check more likely to generate false positive diffs so commented out

    it('Visual Regression test - ' + specname, () => {
       VizCheck.fullPage(specname, 25);
    });
        */
    it('Visual Regression test - OrderSummary', () => {
       Product.breadcrumbs_container.scrollIntoView();
       VizCheck.element(Product.breadcrumbs_container,specname + '-breadcrumbs_container',10,Navigation.navWrapper);
    });
    it('Visual Regression test - FreeUKdeliveryreturns', () => {
       Product.FreeUKdeliveryreturns.scrollIntoView();
       VizCheck.element(Product.FreeUKdeliveryreturns,specname + '-FreeUKdeliveryreturns',1,Navigation.navWrapper);
    });
    it('Visual Regression test - color', () => {
        if (Product.color.isDisplayed() === true) {
            Product.color.scrollIntoView();
            VizCheck.element(Product.color,specname + '-color',15,Navigation.navWrapper);
        } else {
            console.log("No colour section for this product")
        }
    });
    it('Visual Regression test - size_container_dropdown', () => {
       Product.size_container.scrollIntoView();
       VizCheck.element(Product.size_container,specname + '-size_container_dropdown',10,Navigation.navWrapper);
    });
    it('Visual Regression test - add_to_bag_button', () => {
       Product.add_to_bag_button.scrollIntoView();
       VizCheck.element(Product.add_to_bag_button,specname + '-add_to_bag_button',5,Navigation.navWrapper);
    });
    it('Visual Regression test - wishlist_button', () => {
       Product.wishlist_button.scrollIntoView();
       VizCheck.element(Product.wishlist_button,specname + '-wishlist_button',1,Navigation.navWrapper);
    });
    it('Visual Regression test - why_not_try', () => {
        if (Product.why_not_try.isDisplayed() === true) {
            Product.why_not_try.scrollIntoView();
            VizCheck.element(Product.why_not_try,specname + '-why_not_try',1,Navigation.navWrapper);
        } else {
            console.log("No why_not_try section for this product")
        }
    });
    it('Visual Regression test - social_icons', () => {
       Product.social_icons.scrollIntoView();
       VizCheck.element(Product.social_icons,specname + '-social_icons',1,Navigation.navWrapper);
    });
    it('Visual Regression test - product_information_container', () => {
       Product.product_information_container.scrollIntoView();
       VizCheck.element(Product.product_information_container,specname + '-product_information_container',28,Navigation.navWrapper);
    });


    it('Open the product page for TShirt' + specname, () => {
        Environment.openBaseURL();
        Search.searchFor('TShirt');
        Search.PickRandomProduct();
        let sizeboxfound = false;
        while (sizeboxfound === false) {
            if (Product.SizeBoxValid.length > 1) {
                sizeboxfound = true;
            } else {
                Environment.openBaseURL();
                Search.searchFor('TShirt');
                Search.PickRandomProduct();
            }
        }
    });
    /*
    // Full page check more likely to generate false positive diffs so commented out

    it('Visual Regression test - ' + specname, () => {
       VizCheck.fullPage(specname, 25);
    });
        */
    it('Visual Regression test - OrderSummary', () => {
        Product.breadcrumbs_container.scrollIntoView();
        VizCheck.element(Product.breadcrumbs_container,specname + '-breadcrumbs_container',10,Navigation.navWrapper);
    });
    it('Visual Regression test - FreeUKdeliveryreturns', () => {
        Product.FreeUKdeliveryreturns.scrollIntoView();
        VizCheck.element(Product.FreeUKdeliveryreturns,specname + '-FreeUKdeliveryreturns',1,Navigation.navWrapper);
    });
    it('Visual Regression test - color', () => {
        if (Product.color.isDisplayed() === true) {
            Product.color.scrollIntoView();
            VizCheck.element(Product.color,specname + '-color',15,Navigation.navWrapper);
        } else {
            console.log("No colour section for this product")
        }
    });
    it('Visual Regression test - size_container_size_box', () => {
        Product.size_container.scrollIntoView();
        VizCheck.element(Product.size_container,specname + '-size_container_size_box',20,Navigation.navWrapper);
    });
    it('Visual Regression test - add_to_bag_button', () => {
        Product.add_to_bag_button.scrollIntoView();
        VizCheck.element(Product.add_to_bag_button,specname + '-add_to_bag_button',5,Navigation.navWrapper);
    });
    it('Visual Regression test - wishlist_button', () => {
        Product.wishlist_button.scrollIntoView();
        VizCheck.element(Product.wishlist_button,specname + '-wishlist_button',1,Navigation.navWrapper);
    });
    it('Visual Regression test - why_not_try', () => {
        if (Product.why_not_try.isDisplayed() === true) {
            Product.why_not_try.scrollIntoView();
            VizCheck.element(Product.why_not_try,specname + '-why_not_try',1,Navigation.navWrapper);
        } else {
            console.log("No why_not_try section for this product")
        }
    });
    it('Visual Regression test - social_icons', () => {
        Product.social_icons.scrollIntoView();
        VizCheck.element(Product.social_icons,specname + '-social_icons',1,Navigation.navWrapper);
    });
    it('Visual Regression test - product_information_container', () => {
        Product.product_information_container.scrollIntoView();
        VizCheck.element(Product.product_information_container,specname + '-product_information_container',28,Navigation.navWrapper);
    });
});
