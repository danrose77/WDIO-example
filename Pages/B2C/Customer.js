import Page from '../Page'
import Navigation from './/Navigation.js';
import fillObject from '../../functions/fillObject'
import * as yaml from "js-yaml";
import shopperGroupIDfunc from "../../functions/shopperGroupID";
import objectLength from "../../functions/objectLength";
import Screenshot from "../../functions/Screenshot";

class Customer extends Page {
    get username() {
        return $("//input[@id='username_login']");
    }

    get password() {
        return $("//input[@id='passwd_login']");
    }

    get signInButton() {
        return $("//input[@name='Submit']");
    }

    get signOutButton() {
        return $("[onclick]");
    }

    get registerPageEmail() {
        return $("//input[@id='email']");
    }

    get registerPagePhone1() {
        return $("//input[@id='phone_1']");
    }

    get registerPagePhone2() {
        return $("//input[@id='phone_2']");
    }

    get registerPagePassword1() {
        return $("//input[@id='password']");
    }

    get registerPagePassword2() {
        return $("//input[@id='password2']");
    }

    get registerPageGenderSelect() {
        return $("//select[@id='vm_gender']");
    }

    get registerPageFirstName() {
        return $("//input[@id='first_name']");
    }

    get registerPageLastName() {
        return $("//input[@id='last_name']");
    }

    get manualAddress() {
        return $("//a[@id='address-manual']");
    }

    get registerPageButtonRegister() {
        return $("//input[@type='submit']");
    }

    get confirmTerms() {
        return $("//input[@id='confirm-terms']");
    }

    get confirmProceed() {
        return $("//a[contains(@class,'confirm')]//span");
    }

    get delInfo() {
        return $("//div[@id='menu-buttons']//a[2]");
    }

    get addNewAddress() {
        return $("//a[@class='btn btn-light btn-add-address']");
    }

    get addressType() {
        return $("//input[@id='address_type_name']");
    }

    get firstName() {
        return $("//input[@id='first_name']");
    }

    get lastName() {
        return $("//input[@id='last_name']");
    }

    get address1() {
        return $("//input[@id='address_1']");
    }

    get switchToManual() {
        return $("//div[@class='lookup-container']//a[@id='address-manual']");
    }

    get city() {
        return $("//input[@id='city']");
    }

    get region() {
        return $("//select[@id='state']");
    }

    get zip() {
        return $("//input[@id='zip']");
    }

    get country() {
        return $("//select[@id='country']");
    }

    get phone1() {
        return $("//input[@id='phone_1']");
    }

    get phone2() {
        return $("//input[@id='phone_2']");
    }

    get saveBTN() {
        return $("//input[@type='submit']");
    }

    get deliveryAddressList() {
        return $$("div[class='col-12 delivery-addresses'] > a");
    }

    // Functions
    defineCustomer(email) {
        // Establish customer details from yaml file
        let customerSheet = yaml.load(fs.readFileSync('./data/customers.yml', 'utf8'));
        if ((email === undefined)||(email === "")) {
            let screenDate = new Date();
            global.emailaddress = "danrosetest+" + screenDate.getTime() + "@gmail.com";
            global.customerData = customerSheet[country];
        } else {
            global.customerData = customerSheet[emailaddress];
        }
        global.customerDetails = new this.customer();
    }
    setUpNewAccount(passedEmail) {
        if (passedEmail !== undefined) {
            global.emailaddress = passedEmail;
        }
        this.defineCustomer(emailaddress);
        global.giftcard_only = emailaddress.split("!");
        global.giftcard_only = giftcard_only[0];
        if (giftcard_only === "giftcard_only") {
        } else {
            this.signIn(emailaddress);
            let logOutButtonExist = this.signOutButton.isExisting();
            if (logOutButtonExist === false) {
                browser.url(site + 'my-account/register');
                try {
                    this.registerPageEmail.waitForExist(60000);
                } catch (e) {
                    this.registerPageEmail.waitForExist(60000);
                }
                Screenshot.viewport();
                fillObject.element(this.registerPageEmail, emailaddress);
                fillObject.element(this.registerPagePassword1, customerDetails.password);
                fillObject.element(this.registerPagePassword2, customerDetails.password);
                fillObject.element(this.registerPagePhone1, customerDetails.Phone);
                this.registerPageGenderSelect.selectByIndex(1);
                fillObject.element(this.registerPageFirstName, customerDetails.First_name);
                fillObject.element(this.registerPageLastName, customerDetails.Last_name);
                browser.pause(1000);
                if (this.city.isDisplayed() === false) {
                    this.manualAddress.scrollIntoView();
                    this.manualAddress.click();
                    }
                browser.pause(1000);
                try {
                    this.country.selectByVisibleText(customerDetails.cuscountry);
                    if (customerDetails.cuscountry === "United States") {
                        this.region.selectByVisibleText("Alabama");
                    }
                } catch (err) {
                    console.log("Errored selecting country")
                }
                try {
                    fillObject.element(this.address1, customerDetails.Address_line1)
                } catch (err) {
                }
                try {
                    fillObject.element(this.city, customerDetails.City)
                } catch (err) {
                }
                try {
                    fillObject.element(this.zip, customerDetails.Postcode)
                } catch (err) {
                }
                browser.pause(500);
                try {
                    this.registerPageGenderSelect.scroll()
                } catch (err) {

                }
                browser.pause(1000);
                this.registerPagePhone1.scrollIntoView();
                try {
                    this.registerPageButtonRegister.click()
                } catch (err) {

                }
                browser.pause(1000);
                try {
                    this.confirmTerms.click();
                    browser.pause(500);
                    this.confirmProceed.click();
                    browser.pause(1000);
                } catch (err) {
                    try {
                        this.confirmTerms.click();
                        browser.pause(500);
                        this.confirmProceed.click();
                        browser.pause(1000);
                    } catch (err) {
                        try {
                            this.confirmTerms.click();
                            browser.pause(500);
                            this.confirmProceed.click();
                            browser.pause(1000);
                        } catch (err) {
                            console.log("Couldn't create user account")
                        }
                    }
                }
                browser.pause(1000);
            } else {
            }
        }
    }

    addDeliveryAddress() {
        if (giftcard_only === "giftcard_only") {
        } else {
            if (customerDetails.del_YorN === "Y" || formcountry !== "") {
                if (formcountry !== "") {
                    customerDetails.del_country = formcountry;
                }
                this.signIn();
                this.delInfo.click();
                browser.pause(500);

                let numberOfDelAdds = objectLength.element(this.deliveryAddressList);
                numberOfDelAdds = numberOfDelAdds - 1;
                let found = false;
                let counter = 1;
                while (found === false) {
                    let linkToCheck = this.deliveryAddressList[counter];
                    let linkText = linkToCheck.getHTML(false);
                    if (linkText === customerDetails.del_country) {
                        found = true;
                    }
                    if (counter === numberOfDelAdds) {
                        break;
                    }
                    counter++;
                }
                if (found === false) {
                    this.addNewAddress.click();
                    browser.pause(500);
                    fillObject.element(this.addressType, customerDetails.del_country);
                    fillObject.element(this.firstName, customerDetails.First_name);
                    fillObject.element(this.lastName, customerDetails.Last_name);
                    browser.pause(1000);
                    try {
                        this.switchToManual.click()
                    } catch (e) {
                    }
                    this.saveBTN.scrollIntoView();
                    fillObject.element(this.address1, customerDetails.del_address1);
                    browser.pause(500);
                    fillObject.element(this.city, customerDetails.del_city);
                    browser.pause(500);
                    fillObject.element(this.zip, customerDetails.del_postcode);
                    browser.pause(500);
                    fillObject.element(this.country, customerDetails.del_country);
                    browser.pause(500);
                    fillObject.element(this.phone1, customerDetails.Phone);
                    fillObject.element(this.phone2, customerDetails.Phone);
                    this.saveBTN.click();
                    browser.pause(1500);
                } else {
                }
            } else {
            }
        }
    }

    signIn(email) {
        if (emailaddress === undefined || emailaddress === "") {
            global.emailaddress = email;
        }
        browser.url(site + 'log-out');
        browser.pause(1000);
        fillObject.element(this.username, emailaddress);
        fillObject.element(this.password, customerDetails.password);
        this.signInButton.click();
        browser.pause(1000);
    }
}

export default new Customer();
