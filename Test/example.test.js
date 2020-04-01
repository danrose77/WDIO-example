import Herokuapp from '../Pages/Herokuapp';
import Screenshot from "../functions/Screenshot";

describe('Name of the Test', () => {
    it('Name of the first step', () => {
        browser.url('/');
        Herokuapp.keyPressesLink.click();
    });
    it('Name of the second step', () => {
        Herokuapp.sendText("Hello");
        Herokuapp.sendTextFromKeys();
        browser.pause(5000);
        Screenshot.viewport();
    });
});
