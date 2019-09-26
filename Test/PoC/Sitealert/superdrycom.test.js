import Environment from '../../../Pages/B2C/Environment.js';

const sitename = 'https://www.superdry.com/';
const sitetitle = 'Superdry - Jackets, T Shirts, Hoodies, Shorts, Mens & Womens Clothing - Superdry';


describe('Staff user checking that relevant discount is applied', () => {
    it('Open site - ' + sitename, () => {
        Environment.openURL(sitename);
    });
    it('Check title', () => {
        expect(browser.getTitle()).to.equal(sitetitle);
    });
    it('Check URL', () => {
        expect(browser.getUrl()).to.equal(sitename);
    });
    it('Check logo', () => {
        expect(Environment.siteLogoElement.getSize('width')).to.least(200);
        expect(Environment.siteLogoElement.getSize('height')).to.least(40);
    });
    it('Check menu', () => {
        expect(Environment.siteMenuElement.getSize('width')).to.least(25);
        expect(Environment.siteMenuElement.getSize('height')).to.least(15);
    });
});


