import Environment from '../../Pages/B2C/Environment.js';
import Search from "../../Pages/B2C/Search";
import Product from "../../Pages/B2C/Product";
import ElementVerification from "../../functions/ElementVerification"

let searchTerm = 'Bag';

describe('testbed JS file', () => {
    it('Open the product page for ' + searchTerm + ' - ' + specname, () => {
        Environment.openBaseURL();
        Search.searchFor(searchTerm);
        Search.PickRandomProduct();
    });
    it('breadcrumbs_container', () => {
        ElementVerification.withinBounds(Product.breadcrumbs_container,30,30,150,250);
        ElementVerification.sizeAtLeast(Product.breadcrumbs_container, 600,25);
    });
    it('ProductTitle', () => {
        ElementVerification.withinBounds(Product.ProductTitle,1120,1150,160,260);
        ElementVerification.sizeAtLeast(Product.ProductTitle, 700,50);
    });
    it('images_container', () => {
        ElementVerification.withinBounds(Product.images_container,30,30,170,280);
        ElementVerification.sizeAtLeast(Product.images_container, 1000,1000);
    });
    it('thumbnail_image_container', () => {
        ElementVerification.withinBounds(Product.thumbnail_image_container,15,15,190,300);
        ElementVerification.sizeAtLeast(Product.thumbnail_image_container, 160,1000);
    });
    it('picture_image_container', () => {
        ElementVerification.withinBounds(Product.picture_image_container,195,195,190,290);
        ElementVerification.sizeAtLeast(Product.picture_image_container, 800,1000);
    });
    it('FreeUKdeliveryreturns', () => {
        ElementVerification.withinBounds(Product.FreeUKdeliveryreturns,1125,1125,270,450);
        ElementVerification.sizeAtLeast(Product.FreeUKdeliveryreturns, 180,25);
    });
    it('color', () => {
        ElementVerification.withinBounds(Product.color,1140,1140,300,550);
        ElementVerification.sizeAtLeast(Product.color, 700,10);
    });
    it('add_to_bag_button', () => {
        ElementVerification.withinBounds(Product.add_to_bag_button,1140,1140,550,820);
        ElementVerification.sizeAtLeast(Product.add_to_bag_button, 200,45);
    });
    it('wishlist_button', () => {
        ElementVerification.withinBounds(Product.wishlist_button,1445,1445,550,820);
        ElementVerification.sizeAtLeast(Product.wishlist_button, 45,45);
    });
    it('why_not_try', () => {
        ElementVerification.withinBounds(Product.why_not_try,1125,1125,800,1300);
        ElementVerification.sizeAtLeast(Product.why_not_try, 600,300);
    });
    it('social_icons', () => {
        ElementVerification.withinBounds(Product.social_icons,195,195,1200,1500);
        ElementVerification.sizeAtLeast(Product.social_icons, 800,30);
    });
    it('product_information_container', () => {
        ElementVerification.withinBounds(Product.product_information_container,30,30,1300,1500);
        ElementVerification.sizeAtLeast(Product.product_information_container, 1000,50);
    });
});
