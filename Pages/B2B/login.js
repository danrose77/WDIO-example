import Page from '../Page'
import * as yaml from "js-yaml";
import Screenshot from "../../functions/Screenshot";
import write from "../../functions/write";

class login extends Page {
    get email_field() {
        return $("#email");
    }
    get password_field() {
        return $("#password");
    }
    get submit_btn() {
        return $("#submit-btn");
    }
    get forgotten_password_btn() {
        return $("#forgotten-password-btn");
    }

    // Functions
    login(email,password) {
        this.email_field.waitForDisplayed();
        this.email_field.setValue(email);
        this.password_field.setValue(password);
        this.submit_btn.click();
    }
}

export default new login();
