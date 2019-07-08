import Page from '../Pages/Page'

class fillObject extends Page {
  element(element, value) {
    let elementExists = element.isExisting();
    if (elementExists === true) {
      let elementVisible = element.isDisplayed();
      if (elementVisible === true) {
        let tagName = element.getTagName();
        if (tagName === 'input') {
          let typeAttribute = element.getAttribute('type');
// TEXT FIELD HANDLING
          if ((typeAttribute === 'text')||(typeAttribute === 'email')|| (typeAttribute === 'password')) {
            element.setValue(value);
// CHECKBOX HANDLING
          } else if  (typeAttribute === 'checkbox') {
            console.log('In checkbox statement')
            let currentState = element.getValue();
            console.log('currentState = '+currentState)
            if (currentState === 'on') {
              if (value === 'off') {
                element.click();
              }
            } else {
              if (value === 'on') {
                element.click();
              }
            }
          }
// SELECT HANDLING
        } else if (tagName === 'select') {
          element.selectByVisibleText(value);
        } else {
          console.log("Element passed was not identified as a text field/checkbox/selectDD in fillObject.js");
        }
      }
    }
  }
}
export default new fillObject();
