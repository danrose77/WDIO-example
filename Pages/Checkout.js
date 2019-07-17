import Page from './Page'
import fillObject from "../functions/fillObject";
import * as yaml from "js-yaml";
import Screenshot from "../functions/Screenshot";
import write from "../functions/write";
import Navigation from "./Navigation";
import Search from "./Search";
import Product from "./Product";
import objectLength from "../functions/objectLength";
import ShoppingBag from "./ShoppingBag";
import GetRandom from "../functions/GetRandom";
import Customer from "./Customer"

class Checkout extends Page {
    get shipping_first_name() {
        return $("input[id|='shipping_first_name']");
    }

    get shipping_last_name() {
        return $("input[id|='shipping_last_name']");
    }

    get billing_phone() {
        return $("input[id|='billing_phone']");
    }

    get billing_email() {
        return $("input[id|='billing_email']");
    }

    get billing_confirmemail() {
        return $("input[id|='billing_confirmemail']");
    }

    get shipping_address_input1() {
        return $("input[id|='shipping_address_1']");
    }

    get shipping_address_city() {
        return $("input[id|='shipping_city']");
    }

    get shipping_address_region() {
        return $("select[id|='shipping_state']");
    }

    get shipping_address_zip() {
        return $("input[id|='shipping_zip']");
    }

    get shipping_address_country() {
        return $("select[id|='checkout-delivery-country-select']");
    }

    get RD2019_billing_country() {
        return $("select[id|='checkout-billing-country-select']");
    }

    get countryChanged() {
        return $("div[id|='country-changed-modal'] div[class|='modal-footer'] button");
    }

    get billing_same_as_del() {
        return $("input[id|='billing-same-as-delivery']");
    }

    get billing_first_name() {
        return $("input[id|='billing_first_name']");
    }

    get billing_last_name() {
        return $("input[id|='billing_last_name']");
    }

    get shipping_address_manual() {
        return $("#checkout-section-delivery-options > div > div > div > p > a");
    }

    get billing_address_manual() {
        return $(".address-finder-toggle");
    }

    get billing_country() {
        return $("select[id|='checkout-billing-country-select']");
    }

    get billing_address_1() {
        return $("input[id|='billing_address_1']");
    }

    get billing_city() {
        return $("input[id|='billing_city']");
    }

    get billing_zip() {
        return $("input[id|='billing_zip']");
    }

    get paymentButtons() {
        return $$('div.payment-method-label div');
    }

    get name_on_card_field() {
        return $("input[id|='order_payment_name']");
    }

    get card_number_field() {
        return $("input[id|='card-number']");
    }

    get card_expiry_date_dd_month() {
        return $("div.form-group.credit-card-expiry > div > select:nth-child(1)");
    }

    get card_expiry_date_dd_year() {
        return $("div.form-group.credit-card-expiry > div > select:nth-child(2)");
    }

    get card_cvv_code_field() {
        return $("#cvv");
    }

    get buy_now_button() {
        return $("#submit");
    }

    get staffdiscountconfirm() {
        return $("//*[@id='staff-discount-confirm']");
    }

    get staffdiscountsubmit() {
        return $("//*[@id='staff-discount-submit']");
    }

    get view_order() {
        return $(".btn-light");
    }

    get delivery_type_domestic() {
        return $("//a[@id='delivery-type-domestic']");
    }

    get giftcard_expand() {
        return $("//a[contains(@class,'btn btn-primary btn-toggle giftcard-button giftcard-closed')]");
    }

    get giftcard_expanded() {
        return $("//a[@class='btn btn-primary btn-toggle giftcard-button giftcard-open show']");
    }

    get giftcard_code() {
        return $("//input[@id='giftcard-number-input']");
    }

    get giftcard_pin() {
        return $("//input[@id='giftcard-pin-input']");
    }

    get giftcard_submit() {
        return $("//button[@id='giftcard-apply']");
    }

    get giftcard_expand() {
        return $("//a[contains(@class,'btn btn-primary btn-toggle giftcard-button giftcard-closed')]");
    }

    get giftcard_expanded() {
        return $("//a[@class='btn btn-primary btn-toggle giftcard-button giftcard-open show']");
    }

    get giftcard_code() {
        return $("//input[@id='giftcard-number-input']");
    }

    get giftcard_pin() {
        return $("//input[@id='giftcard-pin-input']");
    }

    get giftcard_submit() {
        return $("//button[@id='giftcard-apply']");
    }

    get collection_location() {
        return $("//input[@id='collection-location-search-input']");
    }

    get collection_location_search_button() {
        return $("//a[contains(@class,'btn btn-primary btn-lg lookup-button')]");
    }

    get collection_location_result() {
        return $("div.collection-location.col-12.superdry.pad-1v.spaced-v:nth-child(3)");
    }

    get collection_location_1stresult_accept() {
        return $('//*[@id="collection-location-results"]/div[3]/div[1]/div[1]/div/div[2]/a');
    }
    get collection_location_1stresult_acceptMobile() {
        return $("#collection-location-results [class='collection-location col-12 superdry pad-1v spaced-v']:nth-of-type(3) [class='col-6 offset-3 d-sm-none spaced-v'] [data-collection-type-0]");
    }

    get collectionShowMore() {
        return $('a[id="show-more-locations-button"]');
    }

    get collectionPlusLocationSelect() {
        return $$('#collection-location-results > div[class~="cplus"] > div  > div  > div  > div  > a');
    }
    get collectionPlusLocationSelectMobile() {
        return $$("#collection-location-results > [class*='cplus'] > div > div > a");
    }

    get paypal_button() {
        return $('//label[@data-template="checkout/payment/paypal"]');
    }

    get thankyou_order_placed() {
        return $("//div[@class='row wrapper checkout_thankyou']");
    }

    get paypal_checkout_button() {
        return $("[data-layout]");
    }

    get paypal_haveaccount() {
        return $("//a[@class='btn full ng-binding']");
    }

    get paypal_email() {
        return $("//input[@id='email']");
    }

    get paypal_next() {
        return $("//button[@id='btnNext']");
    }

    get paypal_password() {
        return $("//input[@id='password']");
    }

    get paypal_login() {
        return $("//button[@id='btnLogin']");
    }

    get paypal_confirm() {
        return $("//button[@class='btn full confirmButton continueButton']");
    }

    get paypal_paynow() {
        return $("//input[@id='confirmButtonTop']");
    }

    get deliverySpeedOptions() {
        return $$("div[class='col-sm-3 col-6 bold'] > div > div");
    }

    get deliveryTypeOptions() {
        return $$("div[class='deliveryTypes row'] > div > a");
    }
    get international_delivery() {
        return $("#delivery-type-international");
    }

    get deliverySpeedOptionsContainer() {
        return $("//div[@class='full-indent row consignment-container']");
    }

    get sofortBTN() {
        return $("//div[contains(@class,'no-h-margin row')]//div[5]//label[1]");
    }

    get sofortBankCodeSearch() {
        return $("//input[@id='BankCodeSearch']");
    }

    get sofortBankProceed() {
        return $("//a[contains(text(),'Demo Bank')]");
    }

    get sofortAcc() {
        return $("//input[@id='BackendFormLOGINNAMEUSERID']");
    }

    get sofortPIN() {
        return $("//input[@id='BackendFormUSERPIN']");
    }

    get sofortNext() {
        return $("//button[@class='button-right primary has-indicator']");
    }

    get sofortSelctAccount() {
        return $("//input[@id='account-1']");
    }

    get sofortTAN() {
        return $("//input[@id='BackendFormTan']");
    }

    get checkout_proceed_button() {
        return $("//div[@id='checkout_proceed_button']//input");
    }

    get idealBTN() {
        return $("//div[contains(@class,'no-h-margin row')]//div[4]//label[1]");
    }

    get giroBTN() {
        return $("//div[contains(@class,'no-h-margin row')]//div[4]//label[1]");
    }

    get idealTestBank1() {
        return $("//input[@value='1121']");
    }

    get idealContinue() {
        return $("//input[@value='Continue']");
    }


    get giroBic() {
        return $("//input[@id='giropay.bic-selection']");
    }

    get giro1stResult() {
        return $("//*[@id='giropaysuggestionlist']/li");
    }

    get giroAccName() {
        return $("//input[@id='giropay.accountHolderName']");
    }

    get giroAccNumber() {
        return $("//input[@id='giropay.bankAccountNumber']");
    }

    get giroIBAN() {
        return $("//input[@id='giropay.iban']");
    }

    get giroSubmit() {
        return $("#mainSubmit");
    }

    // Functions
    fillTheDeliveryFields(type) {
        let formcountry = country;
        if (country === "UK") {
            formcountry = "United Kingdom";
        }
        if (type === 'international') {
            formcountry = 'Albania';
        }
        //Read customer data
        Customer.defineCustomer();
        let clickAndCollectDetect = this.collection_location.isDisplayed();
        fillObject.element(this.shipping_first_name, customerData.First_name);
        fillObject.element(this.shipping_last_name, customerData.Last_name);
        fillObject.element(this.billing_phone, customerData.Phone);
        fillObject.element(this.billing_email, emailaddress);
        fillObject.element(this.billing_confirmemail, emailaddress);
        browser.pause(1000);
        if (clickAndCollectDetect !== true) {
            let shippingAddress1displayed = this.shipping_address_input1.isDisplayed();
            if (shippingAddress1displayed !== true) {
                this.shipping_address_manual.click();
            }
            fillObject.element(this.shipping_address_country, formcountry);
            fillObject.element(this.RD2019_billing_country, formcountry);
            browser.pause(250);
            let countryChanged = this.countryChanged.isDisplayed();
            if (countryChanged === true) {
                this.countryChanged.click();
            }
            browser.pause(250);
            fillObject.element(this.shipping_address_input1, customerData.Address_line1);
            fillObject.element(this.shipping_address_city, customerData.City);
            fillObject.element(this.shipping_address_zip, customerData.Postcode);
        }
        browser.pause(250);
        if (clickAndCollectDetect === true) {
            let billingAddress1displayed = this.billing_address_1.isDisplayed();
            if (billingAddress1displayed !== true) {
                this.billing_address_manual.click();
            }
            browser.pause(250);
            fillObject.element(this.billing_country, formcountry);
            browser.pause(250);
            fillObject.element(this.billing_first_name, customerData.First_name);
            fillObject.element(this.billing_last_name, customerData.Last_name);
            fillObject.element(this.billing_address_1, customerData.Address_line1);
            fillObject.element(this.billing_city, customerData.City);
            fillObject.element(this.billing_zip, customerData.Postcode);
        }
        Screenshot.viewport();
    }

    payByCard() {
        let paymentData = yaml.load(fs.readFileSync('./data/payments.yml', 'utf8'));
        let creditCardData = paymentData["creditCard"];
        global.paymentMethod = "Debit Card";
        let Card_Name = creditCardData["name"];
        let Card_Number = creditCardData["number"];
        let Card_exp = creditCardData["exp"];
        let Cvv = creditCardData["cvv"];
        let debit_credit_card_button = this.paymentButtons;
        debit_credit_card_button[0].click();
        browser.pause(500);
        fillObject.element(this.name_on_card_field, Card_Name);
        browser.pause(500);
        browser.pause(500);
        fillObject.element(this.card_number_field, Card_Number);
        let Card_exp_month = Card_exp.slice(0, 2);
        Card_exp_month = parseInt(Card_exp_month, 10);
        this.card_expiry_date_dd_month.selectByIndex(Card_exp_month);
        browser.pause(500);
        let Card_exp_year = Card_exp.slice(3);
        Card_exp_year = parseInt(Card_exp_year, 10);
        Card_exp_year = Card_exp_year - 2000;
        let screendate = new Date();
        let currentYear = screendate.getFullYear();
        currentYear = currentYear - 2000;
        let yearDif = Card_exp_year - currentYear;
        yearDif++;
        this.card_expiry_date_dd_year.selectByIndex(yearDif);
        browser.pause(250);
        this.card_cvv_code_field.setValue(Cvv);
        browser.pause(250);
        this.buy_now_button.click();
        this.orderConfirmation();
    }

    payByIdeal() {
        global.paymentMethod = "Ideal";
        this.idealBTN.click();
        browser.pause(1500);
        Screenshot.viewport();
        this.checkout_proceed_button.click();
        try {
            this.checkout_proceed_button.click()
        } catch (err) {
        }
        browser.pause(1000);
        this.idealTestBank1.waitForExist();
        this.idealTestBank1.click();
        browser.pause(500);
        this.idealContinue.click();
        browser.pause(1000);
        this.thankyou_order_placed.isExisting();
        this.orderConfirmation();
    }

    payByGiropay() {
        let paymentData = yaml.load(fs.readFileSync('./data/payments.yml', 'utf8'));
        let giroData = paymentData["giropay"];
        global.paymentMethod = "Giropay";
        let giroAccName = giroData["giroAccName"];
        let giroAccNumber = giroData["giroAccNumber"];
        let giroIBAN = giroData["giroIBAN"];
        this.giroBTN.click();
        browser.pause(1000);
        this.checkout_proceed_button.click();
        browser.pause(3000);
        let giroBicExist = this.giroBic.isExisting();
        let currentURL = browser.getUrl();
        currentURL = currentURL.split("=");
        currentURL = currentURL[20];
        if (giroBicExist === true) {
            this.giroBic.setValue(giroAccName);
            browser.pause(500);
            browser.keys("Enter");
            browser.pause(500);
            this.giro1stResult.click();
        } else {
            try {
                this.giroSubmit.waitForDisplayed(20000);
            } catch (e) {

            }
            this.giroAccName.setValue(giroAccName);
            this.giroAccNumber.setValue(giroAccNumber);
            this.giroIBAN.setValue(giroIBAN);
            this.giroSubmit.click();
        }

        Screenshot.viewport();
        let referenceNumberArray = currentURL.split("&");
        global.referenceNumber = referenceNumberArray[0];
        this.orderConfirmation();
    }

    payBySofort() {
        let paymentData = yaml.load(fs.readFileSync('./data/payments.yml', 'utf8'));
        global.paymentMethod = "Sofort";
        let sofortData = paymentData["sofort"];
        let bankname = sofortData["Bankname"];
        let accountNumber = sofortData["Account"];
        this.sofortBTN.click();
        Screenshot.viewport();
        browser.pause(1000);
        this.checkout_proceed_button.click();
        browser.pause(3000);
        this.sofortBankCodeSearch.waitForExist();
        this.sofortBankCodeSearch.setValue(bankname);
        browser.pause(1000);
        Screenshot.viewport();
        this.sofortBankProceed.click();
        this.sofortAcc.waitForExist();
        browser.pause(1000);
        this.sofortAcc.setValue(accountNumber);
        this.sofortPIN.setValue("1111");
        Screenshot.viewport();
        browser.pause(1000);
        this.sofortNext.click();
        this.sofortSelctAccount.waitForExist();
        this.sofortSelctAccount.click();
        browser.pause(1000);
        Screenshot.viewport();
        this.sofortNext.click();
        this.sofortTAN.waitForExist();
        browser.pause(1000);
        this.sofortTAN.setValue("12345");
        Screenshot.viewport();
        this.sofortNext.click();
        this.orderConfirmation();
    }
    fillGiftcardForm(cardCode, cardPIN) {
        fillObject.element(this.giftcard_code, cardCode);
        fillObject.element(this.giftcard_pin, cardPIN);
        this.giftcard_submit.click();
        browser.pause(1000);
    }

    addGiftcards(cardCode, cardPIN) {
        if (cardCode !== undefined) {
            this.delivery_type_domestic.scrollIntoView();
            this.giftcard_expand.click();
            this.fillGiftcardForm(cardCode,cardPIN);
        } else {
            if (country === "UK") {
                this.delivery_type_domestic.scrollIntoView();
                this.giftcard_expand.click();
                this.fillGiftcardForm(customerData.giftcardCode1,customerData.giftcardPIN1);
                if ((customerData.giftcardCode2 === "")||(customerData.giftcardCode2 === undefined)) {
                } else {
                    let giftcardOpen = this.giftcard_expanded.isExisting();
                    if (giftcardOpen === false) {
                        this.giftcard_expand.click();
                    }
                    this.fillGiftcardForm(customerData.giftcardCode2,customerData.giftcardPIN2);
                    this.giftcard_expand.waitForExist();
                }
            } else {
            }
        }
        browser.pause(3000);
    }

    payByPaypal() {
        let paymentData = yaml.load(fs.readFileSync('./data/payments.yml', 'utf8'));
        let paypalData = paymentData["paypal"];
        let paypal_email = paypalData["email"];
        let paypal_password = paypalData["password"];
        global.paymentMethod = "Paypal";
        try {
            this.billing_same_as_del.scrollIntoView();
        } catch (e) {
        }
        browser.pause(1000);
        this.paypal_button.click();
        browser.pause(1000);
        let staffdiscountmodal = this.staffdiscountconfirm.isExisting();
        if (staffdiscountmodal === true) {
            this.staffdiscountconfirm.click();
            this.staffdiscountsubmit.click();
        }
        browser.pause(15000);

        // Issue with below statement on iOS, backlog ticket created
        browser.switchToFrame(0);

        this.paypal_checkout_button.waitForEnabled();
        this.paypal_checkout_button.click();
        browser.pause(10000);
        console.log("Reached paypal successfully. Interactions no longer on Superdry site.");
        try {
            let winHandles = browser.getWindowHandles();
            browser.switchToWindow(winHandles[1]);
            let pageSource = browser.getPageSource();
            let pageLoad = pageSource.includes("loading");
            while (pageLoad === true) {
                browser.pause(1000);
                pageSource = browser.getPageSource();
                pageLoad = pageSource.includes('class="loading"');
                console.log(pageLoad);
            }
            let PPemailExist = this.paypal_email.isExisting();
            if (PPemailExist === false) {
                let haveAccountLinkExist = this.paypal_haveaccount.isExisting();
                console.log('haveAccountLinkExist = ' + haveAccountLinkExist);
                let counter = 0;
                while (haveAccountLinkExist === false) {
                    console.log('haveAccountLinkExist = ' + haveAccountLinkExist);
                    browser.pause(1000);
                    counter++;
                    haveAccountLinkExist = this.paypal_haveaccount.isExisting();
                    if (counter === 9) {
                        break;
                    }
                }
                if (haveAccountLinkExist === true) {
                    this.paypal_haveaccount.click();
                }
            }
            fillObject.element(this.paypal_email, paypal_email);
            browser.pause(1000);
            let passwordEnabled = this.paypal_password.isDisplayed();
            console.log('passwordEnabled = ' + passwordEnabled);
            if (passwordEnabled === false) {
                let btnNxtEnabled = this.paypal_next.isExisting();
                console.log('btnNxtEnabled = ' + btnNxtEnabled);
                if (btnNxtEnabled === true) {
                    this.paypal_next.click();
                }
            }
            browser.pause(1000);
            passwordEnabled = this.paypal_password.isDisplayed();
            console.log('passwordEnabled = ' + passwordEnabled);
            if (passwordEnabled === true) {
                this.paypal_password.setValue(paypal_password);
            }
            Screenshot.viewport();
            browser.pause(3000);
            this.paypal_login.waitForEnabled();
            this.paypal_login.click();
            browser.pause(8000);
            let confirmExist = this.paypal_confirm.isExisting();
            console.log(confirmExist);
            if (confirmExist === true) {
                this.paypal_confirm.scrollIntoView();
                Screenshot.viewport();
                this.paypal_confirm.click();
            }
            this.paypal_paynow.waitForEnabled();
            this.paypal_paynow.scrollIntoView();
            Screenshot.viewport();
            this.paypal_paynow.click();

            browser.pause(1000);
            try {
                browser.switchToWindow(winHandles[0])
            } catch (err) {
            }
            browser.pause(8000);
            this.orderConfirmation();
        } catch (e) {
            console.log("Failure detected in Paypal site, script may fail due to this. Issue on likely paypal payments not SD site")
        }
    }

    orderConfirmation() {
        browser.pause(1500);

        if (this.staffdiscountconfirm.isDisplayed() === true) {
            this.staffdiscountconfirm.click();
            browser.pause(1500);
            this.staffdiscountsubmit.click();
            browser.pause(1500);
        }

        if (paymentMethod !== "Giropay") {
            this.view_order.click();
            browser.pause(1000);
            let referenceNumber = browser.getUrl();
            referenceNumber = referenceNumber.split("=");
            global.referenceNumber = referenceNumber[1];
        }

        console.log("Order Number: " + referenceNumber + " generated on " + site);
        write.toTextFile("Order Number: " + referenceNumber + " - " + paymentMethod);
        Screenshot.viewport();
    }

    selectProductWithDeliverySpeedOptions() {
        let success = false;
        while (success === false) {
            Navigation.randomSection();
            Search.PickRandomProduct();
            Product.SelectASizeAndAddTo('Bag');
            Navigation.GoToCheckout();
            let countDelOptions = objectLength.element(this.deliverySpeedOptions);
            console.log('countDelOptions = ' + countDelOptions);
            if (countDelOptions > 1) {
                this.deliverySpeedOptionsContainer.scrollIntoView();
                // this.deliverySpeedOptions[countDelOptions - 1].scrollIntoView();
                Screenshot.viewport();
                success = true;
            } else {
                ShoppingBag.removeAllShoppingBagItems();

            }
        }
    }

    selectProductWithDeliveryTypeOptions() {
        let success = false;
        while (success === false) {
            Navigation.randomSection();
            Search.PickRandomProduct();
            Product.SelectASizeAndAddTo('Bag');
            Navigation.GoToCheckout();
            if (this.international_delivery.isDisplayed() === true ) {
                success = true;
                Screenshot.viewport();
            } else {
                ShoppingBag.removeAllShoppingBagItems();
            }
        }
    }

    selectDeliverySpeedOptionAndPay() {
        let countDelOptions = objectLength.element(this.deliverySpeedOptions);
        let randomNumber = 1;
        let success = false;
        let counter = 0;
        countDelOptions--;
        while (success === false) {
            randomNumber = Math.round(Math.random() * countDelOptions);
            if (randomNumber > 1) {
                success = this.deliverySpeedOptions[randomNumber].isExisting();
                counter++;
                if (counter === 10) {
                    console.log("Count exceeded, somethings gone wrong");
                    break;
                }
            }
        }
        this.deliverySpeedOptions[randomNumber].click();
        this.fillTheDeliveryFields();
        this.payByCard();
    }

    selectLocalDelivery() {
        this.deliveryTypeOptions[0].click();
    }

    selectClickAndCollectAndPay(plus) {
        if (country === "UK") {
            this.deliveryTypeOptions[1].click();
            let collectPoint = "";
            if (country === "UK") {
                collectPoint = "Cheltenham"
            }
            if (country === "US") {
                collectPoint = "New York"
            }
            browser.pause(500);
            fillObject.element(this.collection_location, collectPoint);
            this.collection_location_search_button.click();

            let searchResult = this.collection_location_result.getHTML(false);
            expect(searchResult).to.include(collectPoint);
            if (plus === 'plus') {
                this.collectionShowMore.click();
                browser.pause(500);
                if (formFactor === 'mobile') {
                    GetRandom.element(this.collectionPlusLocationSelectMobile);
                } else {
                    GetRandom.element(this.collectionPlusLocationSelect);
                }
            } else {
                browser.pause(3000);
                if (formFactor === 'mobile') {
                    this.collection_location_1stresult_acceptMobile.click();
                } else {
                    this.collection_location_1stresult_accept.click();
                }
            }
        } else {
            this.deliveryTypeOptions[0].click();
            console.log("No C&C in this region - opted for local")
        }
        this.fillTheDeliveryFields();
        this.payByCard();
    }

    selectInternationalShippingAndPay() {
        this.international_delivery.click();
        this.fillTheDeliveryFields('international');
        this.payByCard();
    }

    selectInternationalShippingNonStandardSpeedAndPay() {
        this.deliveryTypeOptions[2].click();
        let countDelOptions = objectLength.element(this.deliverySpeedOptions);
        let randomNumber = 1;
        let success = false;
        let counter = 0;
        countDelOptions--;
        while (success === false) {
            randomNumber = Math.round(Math.random() * countDelOptions);
            if (randomNumber > 1) {
                success = this.deliverySpeedOptions[randomNumber].isExisting();
                counter++;
                if (counter === 10) {
                    console.log("Count exceeded, somethings gone wrong");
                    break;
                }
            }
        }
        this.deliverySpeedOptions[randomNumber].click();
        this.fillTheDeliveryFields('international');
        this.payByCard();
    }

    payByKlarna() {

    }
}

export default new Checkout();
