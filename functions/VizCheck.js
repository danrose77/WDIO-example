import Page from '../Pages/Page'

class VizCheck extends Page {
  element(element, elementName, variance) {
    browser.saveElement(element, elementName, { /* some options*/ });
    if (variance === undefined) {
      expect(browser.checkElement(element, elementName, { /* some options*/ })).to.equal(0);
    } else {
      expect(browser.checkElement(element, elementName, { /* some options*/ })).to.be.below(variance);
    }
  }
  page(PageName, variance) {
    browser.saveScreen(PageName, { /* some options*/ });
    if (variance === undefined) {
      expect(browser.checkScreen(PageName, { /* some options*/ })).to.equal(0);
    } else {
      expect(browser.checkScreen(PageName, { /* some options*/ })).to.be.below(variance);
    }
  }
  fullPage(PageName, variance) {
    if (variance === undefined) {
      variance = 0;
    }
    browser.saveFullPageScreen(PageName, {});
    expect(browser.checkFullPageScreen(PageName, {})).to.be.most(variance);
    console.log(browser.checkFullPageScreen(PageName, {}));
  }
}
export default new VizCheck();
