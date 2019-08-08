import Page from '../Pages/Page'
import Navigation from "../Pages/Navigation";

class VizCheck extends Page {
  element(element, elementName, variance, hideElement, top, right, bottom, left) {
    if (hideElement === undefined) {
      hideElement = Navigation.copyright_row;
    }
    if (variance === undefined) {
      variance = 0;
    }
    if (top === undefined) {
      top = 0;
    }
    if (right === undefined) {
      right = 0;
    }
    if (bottom === undefined) {
      bottom = 0;
    }
    if (left === undefined) {
      left = 0;
    }
    browser.saveElement(element, elementName, {
          hideElements: [
            hideElement,
          ],
          resizeDimensions:
            {
              top: top,
              right: right,
              bottom: bottom,
              left: left
            },
        }
    );

    expect(browser.checkElement(element, elementName, { hideElements: [
          hideElement,
        ],
      resizeDimensions:
          {
            top: top,
            right: right,
            bottom: bottom,
            left: left
          },
    })).to.be.most(variance);
    console.log(elementName + " variance = " + browser.checkElement(element, elementName, { hideElements: [
        hideElement,
      ],
      resizeDimensions:
          {
            top: top,
            right: right,
            bottom: bottom,
            left: left
          },
    }));
  }
  page(PageName, variance) {
    browser.saveScreen(PageName, { /* some options*/ });
    if (variance === undefined) {
      variance = 0;
    }
    expect(browser.checkScreen(PageName, { /* some options*/ })).to.be.most(variance);
    console.log(PageName + " variance = " + browser.checkScreen(PageName, {}));
  }
  fullPage(PageName, variance) {
    if (variance === undefined) {
      variance = 0;
    }
    browser.saveFullPageScreen(PageName, {});
    expect(browser.checkFullPageScreen(PageName, {})).to.be.most(variance);
    console.log(PageName + " variance = " + browser.checkFullPageScreen(PageName, {}));
  }
}
export default new VizCheck();
