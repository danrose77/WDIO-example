import Page from './Page'
import fillObject from '../functions/fillObject'
import * as yaml from "js-yaml";
import Screenshot from "../functions/Screenshot";
import Environment from "./B2C/Environment";

class AdminPortal extends Page {
    get username() {
        return $("//input[@id='modlgn_username']");
    }

    get password() {
        return $("//input[@id='modlgn_passwd']");
    }

    get logout() {
        return $("//span[@class='logout']");
    }

    get configuration() {
        return $("//a[contains(text(),'Configuration')]");
    }

    get SQLviewer() {
        return $("//a[contains(text(),'SQL Viewer')]");
    }
    get System_link() {
        return $("//a[@class='icon-16-config'][contains(text(),'System')]");
    }
    get CheckoutMenu() {
        return $("//a[contains(text(),'Checkout')]");
    }

    get ParametersMenu() {
        return $("//span[@title='Parameters']");
    }
    get ParametersMenu2() {
        return $("//span[@class='icon-32-config']");
    }
    get ParametersPrefix() {
        return $("#paramsprefix");
    }
    get iFrame() {
        return $("//div[@id='sbox-content']/iframe");
    }

    get primary_endpoint() {
        return $("//input[@id='paramsgivex_primary_endpoint']");
    }

    get fallback_endpoint() {
        return $("//input[@id='paramsgivex_fallback_endpoint']");
    }

    get user_id() {
        return $("//input[@id='paramsgivex_user_id']");
    }

    get user_password() {
        return $("//input[@id='paramsgivex_user_password']");
    }

    get Save() {
        return $("/html[1]/body[1]/form[1]/fieldset[1]/div[1]/button[1]");
    }

    get close() {
        return $("//body[@class='body-overlayed']/div/a[1]");
    }

    get SQLqueryField() {
        return $("//textarea[@id='easysql_query']");
    }

    get SQLexecuteBTN() {
        return $("//span[@title='Exec SQL']");
    }

    get SQLCol2All() {
        return $$("table.adminlist > tbody > tr > td:nth-child(2)");
    }

    get SQLfirstResultCol2() {
        return $("//tr[@class='row0']//td[2]");
    }

    get SQLfirstResultCol5() {
        return $("//tr[@class='row0']//td[5]");
    }

    get SQLsecondResultCol2() {
        return $("//tr[@class='row1']//td[2]");
    }

    get SQLsecondResultCol5() {
        return $("//tr[@class='row1']//td[5]");
    }

    get SQLerror() {
        return $("//form[@id='adminForm']//small");
    }

    get adminSiteLogin() {
        return $('[onclick]');
    }


    // Functions

    login() {
        if (formFactor !== 'mobile') {
            if (site !== undefined) {
                browser.url(site + 'administrator/?source=34885');
            } else {
                browser.url('administrator/?source=34885');
            }
            browser.pause(1000);
            try {
                this.username.setValue(process.env.ADMIN_USERNAME);
                this.password.setValue(process.env.ADMIN_PASSWORD);
                browser.pause(500);
                this.adminSiteLogin.click();
            } catch (e) {
                console.log("No need to log in")
            }
            this.configuration.waitForExist(30000);
            browser.pause(5000);
        }
    }
    disableCaptcha() {
        if (formFactor === 'mobile') {
            this.configuration.click();
        } else {
            this.configuration.moveTo();
        }
        this.SQLviewer.click();
        browser.pause(500);
        this.SQLentry('update system_property set value_string = "false" where name in ("captcha_enabled","captcha_forgottenpw_enabled","captcha_givex_enabled","captcha_registration_enabled");')
    }
    ensureStockInFrontEnd(SKU, QTY) {
        if (QTY === undefined) {
            QTY = 1000;
        }
        if (formFactor === 'mobile') {
            this.configuration.click();
        } else {
            this.configuration.moveTo();
        }
        this.SQLviewer.click();
        browser.pause(1000);
        this.SQLentry("update jos_vm_product set product_publish = 'Y' where product_sku = '" + SKU + "';");
        browser.pause(1000);
        this.SQLentry("update inventory set quantity = '"+QTY+"' where sku = '" + SKU + "';");
    }
    colOrderPrefix(remove) {
        if (site !== undefined) {
            browser.url(site + 'administrator/index.php?option=com_supergroupadmin&view=system');
        } else {
            browser.url('administrator/index.php?option=com_supergroupadmin&view=system');
        }
        browser.pause(2500);
        this.ParametersMenu2.click();
        browser.pause(3000);
        browser.switchToFrame(this.iFrame);
        this.ParametersPrefix.scrollIntoView();
        let currentPrefix = this.ParametersPrefix.getValue();
        if (remove === true) {
            if (currentPrefix.includes(envcol) === true) {
                this.ParametersPrefix.setValue(currentPrefix.slice(envcol.length));
                Screenshot.viewport();
            }
            this.Save.click();
        } else {
            if (currentPrefix.includes(envcol) === false) {
                this.ParametersPrefix.setValue(envcol + currentPrefix);
                Screenshot.viewport();
            }
            this.Save.click();
        }
        browser.switchToParentFrame();
    }

    setStockLevels(skuArray) {
        if (formFactor === 'mobile') {
            this.configuration.click();
        } else {
            this.configuration.moveTo();
        }
        this.SQLviewer.click();
        browser.pause(500);
        let counter = 0;
        while (counter !== skuArray.length) {
            this.SQLentry('update jos_vm_product set product_publish = "Y" where product_sku = "' + skuArray[counter] + '";');
            browser.pause(500);
            this.SQLentry('update inventory set quantity = "1000" where sku = "' + skuArray[counter] + '";');
            browser.pause(500);
            counter++;
        }
    }

    performSetup() {
        /*
        Frame switch not functioning on appium, may have to come back to this, but skipping for now.
        */
        if (formFactor !== 'mobile') {
            let promotionID1 = "";
            let promotionID2 = "";
            let screenDate = new Date();


            this.configuration.moveTo();
            this.CheckoutMenu.click();
            browser.pause(1500);
            this.ParametersMenu.click();
            browser.pause(3000);
            //const frameValue = this.iFrame.element().value;
            browser.switchToFrame(this.iFrame);
            this.primary_endpoint.scrollIntoView();
            if (this.primary_endpoint.getValue() !== "https://beta-dataconnect.givex.com:50104") {
                this.primary_endpoint.setValue("https://beta-dataconnect.givex.com:50104");
                this.fallback_endpoint.setValue("https://beta-dataconnect.givex.com:50104");
                this.user_id.setValue("204928");
                this.user_password.setValue("2937");
                this.Save.click();
            } else {
                browser.switchToParentFrame();
                this.close.click();
            }
            browser.pause(1000);


            if (giftcard_only === "giftcard_only") {
            } else {
                if ((customerDetails.creditAmount > 0) || (customerDetails.staffPercent > 0)) {
                    this.configuration.moveTo();
                    this.SQLviewer.click();
                    browser.pause(500);
                    this.SQLentry('select * from customer_credit limit 2');
                    let firstResultEnd = "";
                    let secondResultEnd = "";
                    let d = new Date();
                    let expiryYear = d.getFullYear();

                    try {
                        promotionID1 = this.SQLfirstResultCol2.getHTML(false);
                        promotionID1 = promotionID1.slice(6, -6);
                        firstResultEnd = this.SQLfirstResultCol5.getHTML(false);
                        firstResultEnd = firstResultEnd.slice(6, 10);
                        firstResultEnd = parseInt(firstResultEnd, 10);
                        browser.pause(500);
                    } catch (e) {
                        promotionID1 = 1000001;
                        promotionID2 = 1000002;
                        expiryYear = expiryYear + 2;
                        this.SQLentry('insert into customer_credit values (' + promotionID1 + ',"Automation Promotion 01", "2016-12-31 12:00:00", "' + expiryYear + '-12-31 00:00:00");');
                        this.SQLentry('insert into customer_credit values (' + promotionID2 + ',"Automation Promotion 01", "2016-12-31 12:00:00", "' + expiryYear + '-12-31 00:00:00");');
                    }
                    try {
                        browser.pause(500);
                        promotionID2 = this.SQLsecondResultCol2.getHTML(false);
                        promotionID2 = promotionID2.slice(6, -6);
                        secondResultEnd = this.SQLsecondResultCol5.getHTML(false);
                        secondResultEnd = secondResultEnd.slice(6, 10);
                        secondResultEnd = parseInt(secondResultEnd, 10);
                    } catch (e) {
                        browser.pause(500);
                        let promotionID1number = parseInt(promotionID1, 10);
                        promotionID1number++;
                        let promotionID2 = promotionID1number;
                        expiryYear = expiryYear + 2;
                        this.SQLentry('insert into customer_credit values (' + promotionID2 + ',"Automation Promotion 02", "2016-12-31 12:00:00", "' + expiryYear + '-12-31 00:00:00");');
                    }

                    expiryYear = d.getFullYear();
                    if (firstResultEnd <= expiryYear) {
                        expiryYear = expiryYear + 2;
                        this.SQLentry('update customer_credit set end_date = "' + expiryYear + '-12-31 00:00:00" where id = ' + promotionID1);
                    }
                    expiryYear = expiryYear - 2;
                    if (secondResultEnd <= expiryYear) {
                        expiryYear = expiryYear + 2;
                        this.SQLentry('update customer_credit set end_date = "' + expiryYear + '-12-31 00:00:00" where id = ' + promotionID2);
                    }

                    //customer credit
                    if (customerDetails.creditAmount !== 0) {
                        let counter = 1;
                        let idExist = true;
                        while (idExist === true) {
                            this.SQLentry('SELECT * FROM customer_credit_creditee where email = "' + emailaddress + '";');
                            let link = this.SQLCol2All;
                            let linkExist = true;
                            try {
                                linkExist = link[counter].isExisting();
                            } catch (e) {
                                linkExist = false;
                            }
                            if (linkExist === false) {
                                break;
                            }
                            let idNumber = link.getHTML(false);
                            idNumber = idNumber.slice(6, -6);
                            idNumber = parseInt(idNumber, 10);
                            this.SQLentry('delete FROM customer_credit_creditee_params where customer_credit_creditee_id = ' + idNumber);
                            counter++;
                        }

                        this.SQLentry('delete FROM customer_credit_creditee where email = "' + emailaddress + '";');
                        this.SQLentry('select * from customer_credit_creditee order by id desc limit 1;');

                        let cusSQLID = this.SQLfirstResultCol2.getHTML(false);
                        cusSQLID = cusSQLID.slice(6, -6);
                        cusSQLID = parseInt(cusSQLID, 10);
                        cusSQLID = cusSQLID + 1;
                        this.SQLentry('insert into customer_credit_creditee values (' + cusSQLID + ',' + promotionID1 + ',"' + emailaddress + '");');
                        this.SQLentry('insert into customer_credit_creditee_params values (' + cusSQLID + ',2,"' + customerDetails.creditAmount + '.00","0.00");');

                        if (shopperGroupID !== 2) {
                            this.SQLentry('insert into customer_credit_creditee_params values (' + cusSQLID + ',' + shopperGroupID + ',"' + customerDetails.creditAmount + '.00","0.00");');
                        }
                        if (customerDetails.creditTimes === 2) {
                            let cusSQLID2 = cusSQLID + 1;
                            this.SQLentry('insert into customer_credit_creditee values (' + cusSQLID2 + ',' + promotionID2 + ',"' + emailaddress + '");');
                            this.SQLentry('insert into customer_credit_creditee_params values (' + cusSQLID2 + ',2,"' + customerDetails.creditAmount + '.00","0.00");');

                            if (shopperGroupID !== 2) {
                                this.SQLentry('insert into customer_credit_creditee_params values (' + cusSQLID2 + ',' + shopperGroupID + ',"' + customerDetails.creditAmount + '.00","0.00");');
                            }
                        }
                    }
                    //staff discount
                    //if customerDetails.staffPercent = 0 don't do any
                    console.log(customerDetails.staffPercent);
                    if ((customerDetails.staffPercent === 0)||(customerDetails.staffPercent === "")||(customerDetails.staffPercent === undefined)) {
                    } else {
                        //this.SQLentry('SELECT * FROM staff_discount where email = "' + cusemail + '"');
                        this.SQLentry('SELECT * FROM staff_discount where email = "' + emailaddress + '"');
                        let staffdiscountpresent = this.SQLfirstResultCol2.isExisting();
                        //add staff discount
                        if (staffdiscountpresent === false) {
                            this.SQLentry('insert into staff_discount values ("AUT' + screenDate.getTime() + '","' + emailaddress + '","' + customerDetails.staffPercent + '");');
                        }
                    }
                    this.logout.click();
                } else {
                }
            }
        }
    }

    SQLentry(query) {
        this.SQLqueryField.setValue(query);
        console.log(query);
        browser.pause(1500);
        this.SQLexecuteBTN.click();
        browser.pause(500);
        try {
            if (this.SQLerror.isExisting === true) {
                let errorText = this.SQLerror.getHTML(false);
                console.log(errorText);
                browser.pause(500);
            }
        } catch (e) {
        }
    }
}

export default new AdminPortal();
