import Page from '../Page'
import fillObject from "../../functions/fillObject";
import * as yaml from "js-yaml";
import Screenshot from "../../functions/Screenshot";
import write from "../../functions/write";
import Navigation from "./Navigation";
import Search from "./Search";
import Product from "./Product";
import objectLength from "../../functions/objectLength";
import ShoppingBag from "./ShoppingBag";
import GetRandom from "../../functions/GetRandom";
import Customer from "./Customer"

class Checkout extends Page {
    get OrderBalanceValues() {
        return $$("#checkout-section-basket [class='col-5  text-right']");
    }
    get OrderTotalValue() {
        return $("#checkout-section-basket-summary [class='col-12']:nth-of-type(5) [class='col-5  text-right']");
    }
    get OrderDeliveryValue() {
        return $("#checkout-section-basket-summary [class='col-12']:nth-of-type(4) [class='col-5  text-right']");
    }
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

    get shipping_address_zip() {
        return $("input[id|='shipping_zip']");
    }

    get shipping_address_country() {
        return $("select[id|='checkout-delivery-country-select']");
    }

    get RD2019_billing_country() {
        return $("select[id|='checkout-billing-country-select']");
    }
    get shipping_state() {
        return $("#shipping_state");
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
    get order_payment_name() {
        return $("#order_payment_name");
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

    get afterpayBTN() {
        return $('//*[@id="checkout-section-payment-methods"]/div/div[2]/div/div[5]/label/div/div');
    }

    get afterpayFRAME() {
        return $("//iframe[@id='adyen-frame']");
    }

    get afterpayStreet() {
        return $("//input[@placeholder='Straat']");
    }

    get afterpayHouseNumber() {
        return $("//input[@placeholder='Huisnummer']");
    }

    get afterpaySubmitBTN() {
        return $("//button[@id='additional-info-submit']");
    }

    get afterpayfirstName() {
        return $('//*[@id="afterpay_default.shopper.firstName"]');
    }

    get afterpaymiddleName() {
        return $('//*[@id="afterpay_default.shopper.infix"]');
    }

    get afterpaylastName() {
        return $('//*[@id="afterpay_default.shopper.lastName"]');
    }

    get afterpaygender() {
        return $('//*[@id="afterpay_default.shopper.gender"]');
    }

    get afterpaydateOfBirthDayOfMonth() {
        return $('//*[@id="afterpay_default.shopper.dateOfBirthDayOfMonth"]');
    }

    get afterpaydateOfBirthMonth() {
        return $('//*[@id="afterpay_default.shopper.dateOfBirthMonth"]');
    }

    get afterpaydateOfBirthYear() {
        return $('//*[@id="afterpay_default.shopper.dateOfBirthYear"]');
    }

    get afterpaytelephoneNumber() {
        return $('//*[@id="afterpay_default.shopper.telephoneNumber"]');
    }

    get afterpayacceptPrivacyPolicy() {
        return $('//*[@id="afterpay_default.acceptTermsAndConditions"]');
    }

    get afterpaymainSubmit() {
        return $('//*[@id="mainSubmit"]');
    }


    get dotPay() {
        return $('//*[@id="checkout-section-payment-methods"]/div/div[2]/div/div[3]/label/div/div');
    }
    get dotPay_continue() {
        return $("//input[contains(@value,'Kup teraz')]");
    }
    get dotPay_receipt() {
        return $('//*[@id="transaction-desc"]/span');
    }

    // Klarna getters

    get klarnaPayLaterLink() {
        return $("[data-template='checkout/payment/klarna'] .payment-method-label div");
    }
    get klarnaPayIn3Link() {
        return $("[data-template='checkout/payment/klarna-slice'] .payment-method-label div");
    }
    get klarnaStreet() {
        return $("[name='klarna_street_address']");
    }
    get klarnaHouseNumber() {
        return $("[name='klarna_house_number']");
    }
    get klarnaSubmitBTN() {
        return $("//button[@id='additional-info-submit']");
    }
    get klarnaBuyBTN() {
        return $("//button[@id='buy-button']");
    }
    get klarnaNewFrame() {
        return $("//iframe[@id='klarna-hpp-instance-fullscreen']");
    }
    get klarnaDOB() {
        return $('//input[@id="purchase-approval-date-of-birth"]');
    }
    get klarnaDOBcontinue() {
        return $('//*[@id="purchase-approval-continue__text"]');
    }
    get klarnaBuyNow() {
        return $('.btn-submit');
    }
    get klarnaTotalPurchaseValue() {
        return $('.amount___LANix strong');
    }
    get klarnaDeliveryPurchaseValue() {
        return $('#desktop-order-lines__item__1__amount');
    }
    get klarnaCardNumber() {
        return $("[name='cardNumber']");
    }
    get klarnaexpire() {
        return $("[name='expire']");
    }
    get klarnasecurityCode() {
        return $("[name='securityCode']");
    }

    get klarnaIn3BuyButton() {
        return $("#buy-button__text");
    }
    get klarnaIn3Frame() {
        return $("//div[@id='pay-later-slice-it-slice-it-by-card-card-container']/iframe[@title='payment-gateway-frame']");
    }
    get alliframes() {
        return $$("iframe");
    }
    get checkout_basket() {
        return $('#checkout-section-basket');
    }

    get Staff_Discount() {
        return $("//div[@id='checkout-section-basket-summary']//div[.='Staff Discount']");
    }

    get remove_modals() {
        return $$("a[data-target='#remove-consignment-modal']");
    }
    get order_summary() {
        return $("//h2[contains(text(),'2. Order Summary')]");
    }
    get accept_remove() {
        return $("//button[contains(text(),'Yes')]");
    }
    get basket_empty() {
        return $("//p[@class='basket__empty']");
    }

    get bankTransferLink() {
        return $("[data-template='checkout\/payment\/bank-transfer-form'] .payment-method-label div");
    }

    // Functions
    selectLocalDelivery() {
        this.deliveryTypeOptions[0].click();
    }
    payByBankTransfer() {
        global.paymentMethod = "BankTransfer";
        this.bankTransferLink.waitForDisplayed(30000);
        this.bankTransferLink.click();
        browser.pause(1000);
        this.klarnaBuyNow.click();
        this.orderConfirmation();
    }
    fillTheDeliveryFields(type) {
        let formcountry = country;
        if (country === "UK") {
            formcountry = "United Kingdom";
        } else if (country === "US") {
            formcountry = "United States";
        }
        if (type === 'international') {
            formcountry = 'Albania';
        }
        //Read customer data
        if ((customerData.First_name === "")||(customerData.First_name === undefined)) {
            Customer.defineCustomer();
        }
        let clickAndCollectDetect = this.collection_location.isDisplayed();
        fillObject.element(this.shipping_first_name, customerData.First_name);
        fillObject.element(this.shipping_last_name, customerData.Last_name);
        fillObject.element(this.billing_phone, customerData.Phone);
        fillObject.element(this.billing_email, emailaddress);
        fillObject.element(this.billing_confirmemail, emailaddress);
        if (clickAndCollectDetect !== true) {
            let shippingAddress1displayed = this.shipping_address_input1.isDisplayed();
            try{
                if (shippingAddress1displayed !== true) {
                    this.shipping_address_manual.click();
                }
            } catch (e) {

            }
            try {
                fillObject.element(this.shipping_address_country, formcountry);
            } catch (e) {

            }
            fillObject.element(this.RD2019_billing_country, formcountry);
            if (formcountry === "United States") {
                this.shipping_state.selectByVisibleText("Alabama");
            }
            let countryChanged = this.countryChanged.isDisplayed();
            if (countryChanged === true) {
                this.countryChanged.click();
            }
            fillObject.element(this.shipping_address_input1, customerData.Address_line1);
            fillObject.element(this.shipping_address_city, customerData.City);
            fillObject.element(this.shipping_address_zip, customerData.Postcode);
        }
        if (clickAndCollectDetect === true) {
            let billingAddress1displayed = this.billing_address_1.isDisplayed();
            if (billingAddress1displayed !== true) {
                this.billing_address_manual.click();
            }
            fillObject.element(this.billing_country, formcountry);
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
        let Card_expM = creditCardData["expM"];
        let Card_expY = creditCardData["expY"];
        let Cvv = creditCardData["cvv"];
        let debit_credit_card_button = this.paymentButtons;
        debit_credit_card_button[0].click();
        browser.pause(500);
        this.card_number_field.setValue(Card_Number);
        browser.pause(500);
        this.card_expiry_date_dd_month.selectByIndex(Card_expM);
        let Card_exp_year = parseInt(Card_expY, 10);
        Card_exp_year = Card_exp_year - 2000;
        let screenDate = new Date();
        let currentYear = screenDate.getFullYear();
        currentYear = currentYear - 2000;
        let yearDif = Card_exp_year - currentYear;
        yearDif++;
        browser.pause(500);
        this.card_expiry_date_dd_year.selectByIndex(yearDif);
        browser.pause(500);
        this.card_cvv_code_field.setValue(Cvv);
        browser.pause(500);
        this.name_on_card_field.setValue("Test");
        browser.pause(500);
        this.buy_now_button.click();
        browser.pause(500);
        this.orderConfirmation();
    }

    payByIdeal() {
        global.paymentMethod = "Ideal";
        this.idealBTN.click();
        this.checkout_proceed_button.waitForEnabled();
        Screenshot.viewport();
        this.checkout_proceed_button.click();
        try {
            this.checkout_proceed_button.click()
        } catch (err) {
        }
        this.idealTestBank1.waitForExist();
        this.idealTestBank1.click();
        browser.pause(500);
        this.idealContinue.click();
        this.thankyou_order_placed.waitForExist();
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
        this.sofortBankCodeSearch.waitForExist(30000);
        this.sofortBankCodeSearch.setValue(bankname);
        browser.pause(1000);
        Screenshot.viewport();
        this.sofortBankProceed.click();
        this.sofortAcc.waitForExist(30000);
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
            this.fillGiftcardForm(cardCode, cardPIN);
        } else {
            if (country === "UK") {
                this.delivery_type_domestic.scrollIntoView();
                this.giftcard_expand.click();
                this.fillGiftcardForm(customerData.giftcardCode1, customerData.giftcardPIN1);
                if ((customerData.giftcardCode2 === "") || (customerData.giftcardCode2 === undefined)) {
                } else {
                    let giftcardOpen = this.giftcard_expanded.isExisting();
                    if (giftcardOpen === false) {
                        this.giftcard_expand.click();
                    }
                    this.fillGiftcardForm(customerData.giftcardCode2, customerData.giftcardPIN2);
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
            this.staffdiscountsubmit.click();
        }
        if (paymentMethod !== "Giropay") {
            if (paymentMethod !== "BankTransfer") {
                this.view_order.waitForDisplayed(30000);
                this.view_order.click();
            }
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
            if (this.international_delivery.isDisplayed() === true) {
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
        this.deliveryTypeOptions[2].scrollIntoView();
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

    payByKlarna(type) {
        let OBVlength = this.OrderBalanceValues.length;
        let OrderTotalValue = "";
        let OrderDeliveryValue = "";
        console.log('OBVlength = ' + OBVlength);
        if (OBVlength === 4) {
            OrderTotalValue = this.OrderBalanceValues[3].getHTML(false);
            OrderDeliveryValue = this.OrderBalanceValues[1].getHTML(false);
        } else if (OBVlength === 3) {
            OrderTotalValue = this.OrderBalanceValues[2].getHTML(false);
            OrderDeliveryValue = this.OrderBalanceValues[1].getHTML(false);
        } else {
            OrderTotalValue = this.OrderBalanceValues[1].getHTML(false);
            OrderDeliveryValue = 0;
        }
        OrderTotalValue = OrderTotalValue.replace(/[^0-9]+|\s+/gmi, "");
        OrderDeliveryValue = OrderDeliveryValue.replace(/[^0-9]+|\s+/gmi, "");
        console.log('OrderTotalValue = ' + OrderTotalValue);
        console.log('OrderDeliveryValue = ' + OrderDeliveryValue);
        OrderTotalValue = parseInt(OrderTotalValue);
        if ((type === 'in3')||(type === 'in4')) {
            this.klarnaPayIn3Link.click();
            if (siteSuffix === 'US') {
                browser.pause(3000);
                this.klarnaPayIn3Link.click();
            }
        } else {
            this.klarnaPayLaterLink.click();
        }
        this.klarnaStreet.waitForDisplayed(30000);
        browser.pause(3000);
        this.klarnaStreet.setValue("Test Street");
        browser.pause(3000);
        this.klarnaHouseNumber.setValue("5");
        browser.pause(3000);
        try{
            this.klarnaSubmitBTN.click();
            browser.pause(3000);
        } catch (e) {
            console.log("Klarna submit not clicked")
        }
        try{
            this.klarnaBuyNow.click();
        } catch (e) {
            console.log("Klarna klarnaBuyNow not clicked")
        }
        this.klarnaTotalPurchaseValue.waitForDisplayed(30000);
        let klarnaTotalPurchaseValue = this.klarnaTotalPurchaseValue.getHTML(false);

        klarnaTotalPurchaseValue = klarnaTotalPurchaseValue.replace(/[^0-9]+|\s+/gmi, "");
        klarnaTotalPurchaseValue = parseInt(klarnaTotalPurchaseValue);

        expect(OrderTotalValue).to.equal(klarnaTotalPurchaseValue);
        console.log("Confirmed that order total value (" + OrderTotalValue + ") is equal to the Klarna total purchase value (" + klarnaTotalPurchaseValue + ").");

        let deliveryZero = parseInt(OrderDeliveryValue.slice(1));
        OrderDeliveryValue = parseInt(OrderDeliveryValue);
        if (deliveryZero !== 0) {
            let klarnaDeliveryPurchaseValue = this.klarnaDeliveryPurchaseValue.getHTML(false);
            klarnaDeliveryPurchaseValue = klarnaDeliveryPurchaseValue.replace(/[^0-9]+|\s+/gmi, "");
            klarnaDeliveryPurchaseValue = parseInt(klarnaDeliveryPurchaseValue);
            expect(OrderDeliveryValue).to.equal(klarnaDeliveryPurchaseValue);
            console.log("Confirmed that order delivery value (" + OrderDeliveryValue + ") is equal to the Klarna delivery purchase value (" + klarnaDeliveryPurchaseValue + ").");
        } else {
            console.log("Delivery cost 0 so no delivery cost displayed in Klarna")
        }

        try{
            browser.pause(3000);
            this.klarnaBuyBTN.waitForEnabled(30000);
            this.klarnaBuyBTN.click();
            browser.pause(3000);
        } catch (e) {
            console.log("Klarna klarnaBuyBTN not clicked")
        }
        browser.pause(3000);

        if ((type === 'in3')||(type === 'in4')) {
            try{
                browser.switchToParentFrame();
                browser.switchToFrame(this.alliframes[0]);
                browser.switchToFrame(this.alliframes[0]);

                this.klarnaCardNumber.setValue("4111111111111111");
                this.klarnaexpire.setValue("10/20");
                this.klarnasecurityCode.setValue("737");
                browser.switchToParentFrame();
                browser.switchToParentFrame();
                this.klarnaIn3BuyButton.click();
            } catch(e) {
                console.log("Klarna in3 failure")
            }
        } else {
            try{
                try{
                    browser.switchToFrame(this.klarnaNewFrame);
                } catch (e) {
                    console.log("Klarna frame not switched")
                }
                browser.pause(3000);
                console.log(this.view_order.isDisplayed());
                if (this.view_order.isDisplayed() === false) {
                    this.klarnaDOB.setValue('01011990');
                    this.klarnaDOBcontinue.click();
                    browser.pause(6000);
                }
            } catch(e) {
                console.log("Klarna DOB not checked")
            }
        }

        this.orderConfirmation();
    }

    payByAfterpay() {
        let paymentData = yaml.load(fs.readFileSync('./data/payments.yml', 'utf8'));
        let afterpayData = paymentData["afterpay"];
        global.paymentMethod = "Afterpay";
        let afterpayStreet = afterpayData["afterpayStreet"];
        let afterpayHouseNumber = afterpayData["afterpayHouseNumber"];
        let afterpayfirstName = afterpayData["afterpayfirstName"];
        let afterpaymiddleName = afterpayData["afterpaymiddleName"];
        let afterpaylastName = afterpayData["afterpaylastName"];
        let afterpaygender = afterpayData["afterpaygender"];
        let afterpaydateOfBirthDayOfMonth = afterpayData["afterpaydateOfBirthDayOfMonth"];
        let afterpaydateOfBirthMonth = afterpayData["afterpaydateOfBirthMonth"];
        let afterpaydateOfBirthYear = afterpayData["afterpaydateOfBirthYear"];
        let afterpaytelephoneNumber = afterpayData["afterpaytelephoneNumber"];
        try {
            this.afterpayBTN.click()
        } catch (e) {
            browser.pause(1500);
            this.afterpayBTN.click();
        }
        browser.pause(1500);
        this.afterpayStreet.waitForExist();
        this.afterpayStreet.setValue(afterpayStreet);
        this.afterpayHouseNumber.setValue(afterpayHouseNumber);
        this.afterpaySubmitBTN.click();
        browser.pause(2500);
        try {
            this.afterpayFRAME.waitForExist();
            browser.switchToFrame(this.afterpayFRAME);
        } catch (e) {

        }
        browser.pause(2500);
        this.afterpayfirstName.waitForExist();
        this.afterpayfirstName.setValue(afterpayfirstName);
        this.afterpaymiddleName.setValue(afterpaymiddleName);
        this.afterpaylastName.setValue(afterpaylastName);
        afterpaygender = parseInt(afterpaygender);
        this.afterpaygender.selectByIndex(afterpaygender);
        this.afterpaydateOfBirthDayOfMonth.setValue(afterpaydateOfBirthDayOfMonth);
        this.afterpaydateOfBirthMonth.setValue(afterpaydateOfBirthMonth);
        this.afterpaydateOfBirthYear.setValue(afterpaydateOfBirthYear);
        this.afterpaytelephoneNumber.setValue(afterpaytelephoneNumber);
        this.afterpayacceptPrivacyPolicy.click();
        Screenshot.viewport();
        this.afterpaymainSubmit.click();
        this.orderConfirmation();
    }
    payByDotpay() {
        global.paymentMethod = "Dotpay";
        this.dotPay.click();
        browser.pause(1000);
        this.dotPay_continue.click();
        browser.pause(1000);
        try {
            this.dotPay_receipt.waitForExist()
        } catch (err) {
        }
        this.orderConfirmation();
    }
    ensureStaffDiscountApplied() {
        this.Staff_Discount.waitForDisplayed(10000);
        expect(this.Staff_Discount.isDisplayed()).to.be.true;
        if (this.Staff_Discount.isDisplayed()) {
            this.Staff_Discount.scrollIntoView();
            Screenshot.viewport();
        }
    }
    emptyBag() {
        let numberOfModals = this.remove_modals.length;
        while (numberOfModals !== 0) {
            this.order_summary.scrollIntoView();
            this.remove_modals[0].click();
            browser.pause(1000);
            this.accept_remove.click();
            browser.pause(1000);
            numberOfModals--;
        }
        browser.pause(1000);
        expect(this.basket_empty.isDisplayed()).to.be.true;
        Screenshot.viewport();
    }
}

export default new Checkout();
