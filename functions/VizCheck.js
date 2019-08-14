import Page from '../Pages/Page'
import Navigation from "../Pages/B2C/Navigation";

class VizCheck extends Page {
  element(element, elementName, variance, hideElement, top, right, bottom, left) {
    if (hideElement === undefined) {
        // Simplest way to handle the hideElements option when no element is defined is to hide something that will not affect the page.
        // Hiding the copyright section (because its at the bottom of the page and won't impact most visual regression tests).
        // If you need to screenshot the copyright section pass another element to hide (ie navwrapper).
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
  screen(ScreenName, variance) {
    browser.saveScreen(ScreenName, { /* some options*/ });
    if (variance === undefined) {
      variance = 0;
    }
    expect(browser.checkScreen(ScreenName, { /* some options*/ })).to.be.most(variance);
    console.log(ScreenName + " variance = " + browser.checkScreen(ScreenName, {}));
  }
  page(PageName, variance) {
    if (variance === undefined) {
      variance = 0;
    }
    browser.saveFullPageScreen(PageName, {});
    expect(browser.checkFullPageScreen(PageName, {})).to.be.most(variance);
    console.log(PageName + " variance = " + browser.checkFullPageScreen(PageName, {}));
  }
}
export default new VizCheck();
