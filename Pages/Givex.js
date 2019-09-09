import Page from './Page'
import Screenshot from "../functions/Screenshot";
import * as yaml from "js-yaml";

class Storefinder extends Page {
    get username() {
        return $("//input[@name='user']");
    }

    get password() {
        return $("//input[@name='pass']");
    }

    get submit() {
        return $("input[value='Submit']");
    }

    get searchVal() {
        return $("//td[@colspan='4']//input[@name='srch_val']");
    }

    get searchSubmit() {
        return $("//input[@value='Submit']");
    }

    get certificateBalance() {
        return $("//*[@id='s2']/p/table/tbody/tr[1]/td[2]");
    }

    get certificateActive() {
        return $("//*[@id='s2']/p/table/tbody/tr[3]/td[2]/font");
    }

    get operator() {
        return $("//input[@name='inp_oper']");
    }

    get userID() {
        return $("//input[@name='inp_user']");
    }

    get giftcardNumber() {
        return $("//input[@name='inp_cert']");
    }

    get amount() {
        return $("//input[@name='inp_amt']");
    }

    get comment() {
        return $("//input[@name='evtext']");
    }

    get add() {
        return $("//*[@id='main_right']/table/tbody/tr/td/form/center/input[1]");
    }

    get error() {
        return $("//font[@class='error_class']");
    }

    get titlebar() {
        return $("//td[@class='title_bar_class']");
    }

    // Functions

    /*
    Giftcards disabled on mobile platforms due to Givex issues, scripts can still run, just need the giftcard setup run separately on a desktop browser first.
     */
    login() {
        if (formFactor !== 'mobile') {
            browser.url('https://beta-wwws.givex.com/portal/login.py');
            $('#consent-button').click();
            this.username.setValue("Daniel.rose");
            this.password.setValue("Pineapple77");
            this.submit.click();
            Screenshot.viewport();
        }
    }

    configureGiftcards(code) {
        this.inputCard('transaction', code);
        let errorExist = this.error.isExisting();
        if (errorExist === true) {
            this.inputCard('adjustment', code);
            try {
                this.titlebar.waitForExist();
                Screenshot.viewport();
            } catch (err) {
            }
        } else {
            this.titlebar.waitForExist();
            Screenshot.viewport();
        }
    }

    setupGiftcards(cardCode) {
        if (formFactor !== 'mobile') {
            if (cardCode !== undefined) {
                let checkup = this.existingGCCheck(cardCode);
                let currentCertBal = checkup.currentCertBal;
                let status = checkup.status;
                if ((currentCertBal === 0) || (status !== "Active") || (status === undefined)) {
                    this.configureGiftcards(cardCode);
                }
            } else {
                if ((customerData.giftcardCode1 !== "") || (customerData.giftcardCode1 !== undefined)) {
                    let checkup = this.existingGCCheck(customerData.giftcardCode1);
                    let currentCertBal = checkup.currentCertBal;
                    let status = checkup.status;
                    if ((currentCertBal === 0) || (status !== "Active") || (status === undefined)) {
                        this.configureGiftcards(customerData.giftcardCode1);
                    }

                    if ((customerData.giftcardCode2 === "") || (customerData.giftcardCode2 !== undefined)) {
                    } else {
                        let checkup2 = this.existingGCCheck(customerData.giftcardCode2);
                        let currentCertBal2 = checkup2.currentCertBal;
                        let status2 = checkup2.status;
                        if ((currentCertBal2 === 0) || (status2 !== "Active") || (status2 === undefined)) {
                            this.configureGiftcards(customerData.giftcardCode2);
                        }
                    }
                }
            }
        }
    }

    inputCard(type, GCC) {
        if (type === 'adjustment') {
            browser.url("https://beta-wwws.givex.com/portal/cs/cert_adjustment.py?_LANGUAGE_:en+client_id:24652++item:Adjustment");
        } else if (type === 'transaction') {
            browser.url("https://beta-wwws.givex.com/portal/cs/cert_activate.py?_LANGUAGE_:en+client_id:24652++item:Activate");
        }
        this.operator.waitForExist();
        this.operator.setValue("0");
        this.userID.setValue("204928");
        this.giftcardNumber.setValue(GCC);
        this.amount.setValue("5");
        this.comment.setValue("Test");
        this.add.click();
    }

    existingGCCheck(GCC) {
        browser.url("https://beta-wwws.givex.com/portal/cs/cert_search.py?_LANGUAGE_:en+client_id:24652++item:Certificate%20Search");
        this.searchVal.waitForExist();
        this.searchVal.setValue(GCC);
        this.searchSubmit.click();
        browser.pause(1000);
        let currentCertBal = "";
        let status = "";
        let certBalExist = this.certificateBalance.isExisting();
        if (certBalExist === true) {
            currentCertBal = this.certificateBalance.getHTML(false);
            currentCertBal = parseFloat(currentCertBal);
        } else {
            currentCertBal = 'none';
        }
        if (this.certificateActive.isExisting === true) {
            status = this.certificateActive.getHTML(false);
        } else {
            status = 'none';
        }
        return {currentCertBal: currentCertBal, status: status};
    }
}

export default new Storefinder();
