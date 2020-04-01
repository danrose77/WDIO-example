import Page from './Page'
import Screenshot from "../functions/Screenshot";

class Herokuapp extends Page {
    get inputsLink() {
        return $("//a[contains(text(),'Inputs')]");
    }
    get keyPressesLink() {
        return $("//a[contains(text(),'Key Presses')]");
    }
    get keyPressesInputField() {
        return $("//input[@id='target']");
    }


    // Functions
    sendText(textToSend) {
        this.keyPressesInputField.setValue(textToSend);
    }
    sendTextFromKeys() {
        this.keyPressesInputField.click();
        browser.pause(250);
        browser.sendKeys(["Different Text"]);
    }
}

export default new Herokuapp();
