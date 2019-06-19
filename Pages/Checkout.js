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

class Checkout extends Page {
  get shipping_first_name()     {return $("input[id|='shipping_first_name']");}
  get shipping_last_name()      {return $("input[id|='shipping_last_name']");}
  get billing_phone()           {return $("input[id|='billing_phone']");}
  get billing_email()           {return $("input[id|='billing_email']");}
  get billing_confirmemail()    {return $("input[id|='billing_confirmemail']");}
  get shipping_address_input1() {return $("input[id|='shipping_address_1']");}
  get shipping_address_input2() {return $("input[id|='shipping_address_2']");}
  get shipping_address_city()   {return $("input[id|='shipping_city']");}
  get shipping_address_region() {return $("select[id|='shipping_state']");}
  get shipping_address_zip()    {return $("input[id|='shipping_zip']");}
  get shipping_address_country()  {return $("select[id|='checkout-delivery-country-select']");}
  get RD2019_billing_country()  {return $("select[id|='checkout-billing-country-select']");}
  get countryChanged()          {return $("div[id|='country-changed-modal'] div[class|='modal-footer'] button");}
  get billing_same_as_del()     {return $("input[id|='billing-same-as-delivery']");}
  get billing_first_name()      {return $("input[id|='billing_first_name']");}
  get billing_last_name()       {return $("input[id|='billing_last_name']");}
  get shipping_address_manual()  {return $("#checkout-section-delivery-options > div > div > div > p > a");}
  get billing_address_manual()  {return $$("#checkout-section-billing-address > div > div > div > div > p > a");}
  get billing_country()         {return $("select[id|='checkout-billing-country-select']");}
  get billing_address_1()       {return $("input[id|='billing_address_1']");}
  get billing_city()            {return $("input[id|='billing_city']");}
  get billing_zip()             {return $("input[id|='billing_zip']");}
  get paymentButtons()          {return $$('div.payment-method-label div');}
  get name_on_card_field()        {return $("input[id|='order_payment_name']");}
  get card_number_field()         {return $("input[id|='card-number']");}
  get card_expiry_date_dd_month() {return $("div.form-group.credit-card-expiry > div > select:nth-child(1)");}
  get card_expiry_date_dd_year()  {return $("div.form-group.credit-card-expiry > div > select:nth-child(2)");}
  get card_cvv_code_field()       {return $("#cvv");}
  get buy_now_button()            {return $("#submit");}
  get staffdiscountconfirm()      {return $("//*[@id='staff-discount-confirm']");}
  get staffdiscountsubmit()       {return $("//*[@id='staff-discount-submit']");}
  get order_reference()           {return $("//span[@class='order-number']");}

  get delivery_type_domestic()           {return $("//a[@id='delivery-type-domestic']");}

  get promo_section()           {return $("//div[contains(@class,'voucher-code-toggle')]");}
  get giftcard_expand()           {return $("//a[contains(@class,'btn btn-primary btn-toggle giftcard-button giftcard-closed')]");}
  get giftcard_expanded()           {return $("//a[@class='btn btn-primary btn-toggle giftcard-button giftcard-open show']");}
  get giftcard_code()           {return $("//input[@id='giftcard-number-input']");}
  get giftcard_pin()           {return $("//input[@id='giftcard-pin-input']");}
  get giftcard_submit()           {return $("//button[@id='giftcard-apply']");}
  get giftcard_expand()           {return $("//a[contains(@class,'btn btn-primary btn-toggle giftcard-button giftcard-closed')]");}
  get giftcard_expanded()           {return $("//a[@class='btn btn-primary btn-toggle giftcard-button giftcard-open show']");}
  get giftcard_code()           {return $("//input[@id='giftcard-number-input']");}
  get giftcard_pin()           {return $("//input[@id='giftcard-pin-input']");}
  get giftcard_submit()           {return $("//button[@id='giftcard-apply']");}

  get collection_location()           {return $("//input[@id='collection-location-search-input']");}
  get collection_location_search_button()           {return $("//a[contains(@class,'btn btn-primary btn-lg lookup-button')]");}
  get collection_location_result()           {return $("div.collection-location.col-12.superdry.pad-1v.spaced-v:nth-child(3)");}
  get collection_location_1stresult_accept()           {return $('//*[@id="collection-location-results"]/div[3]/div[1]/div[1]/div/div[2]/a');}
  get collectionShowMore()           {return $('a[id="show-more-locations-button"]');}
  get collectionPlusLocationSelect()           {return $$('#collection-location-results > div[class~="cplus"] > div  > div  > div  > div  > a');}

  get paypal_button()     {return $('//label[@data-template="checkout/payment/paypal"]');}
  get thankyou_order_placed()     {return $("//div[@class='row wrapper checkout_thankyou']");}
  get order_reference()           {return $("//span[@class='order-number']");}
  get staffdiscountconfirm()      {return $("//*[@id='staff-discount-confirm']");}
  get staffdiscountsubmit()       {return $("//*[@id='staff-discount-submit']");}
  get paypal_checkout_button()    {return $("//*[@id='paypal-animation-content']/div[1]/div[1]/img[1]");}
  get paypal_haveaccount()        {return $("//a[@class='btn full ng-binding']");}
  get paypal_email()              {return $("//input[@id='email']");}
  get paypal_next()               {return $("//button[@id='btnNext']");}
  get paypal_password()           {return $("//input[@id='password']");}
  get paypal_login()              {return $("//button[@id='btnLogin']");}
  get paypal_confirm()            {return $("//button[@class='btn full confirmButton continueButton']");}
  get paypal_paynow()             {return $("//input[@id='confirmButtonTop']");}

  get deliverySpeedOptions()             {return $$("div[class='col-sm-3 col-6 bold'] > div > div");}
  get deliveryTypeOptions()             {return $$("div[class='deliveryTypes row'] > div > a");}
  get deliverySpeedOptionsContainer()             {return $("//div[@class='full-indent row consignment-container']");}
  
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
    let customerSheet = yaml.load(fs.readFileSync('./data/customers.yml', 'utf8'));
    let customerData = customerSheet[country];
    let cusfirstname = customerData["First_name"];
    let cuslastname = customerData["Last_name"];
    Phone = customerData["Phone"];
    let del_address1 = customerData["Address_line1"];
    let Address_line2 = customerData["Address_line2"];
    let del_city = customerData["City"];
    let Region = customerData["Region"];
    let del_postcode = customerData["Postcode"];
    let screendate = new Date();
    let uniqueNo = screendate.getTime();
    uniqueNo = uniqueNo.toString();
    uniqueNo = uniqueNo.slice(-5);
    let Email = "danrosetest+"+uniqueNo+"@gmail.com";

    let clickAndCollectDetect = this.collection_location.isDisplayed();
    fillObject.element(this.shipping_first_name, cusfirstname);
    fillObject.element(this.shipping_last_name,cuslastname);
    fillObject.element(this.billing_phone,Phone);
    fillObject.element(this.billing_email,Email);
    fillObject.element(this.billing_confirmemail,Email);
    browser.pause(250);
    if (clickAndCollectDetect !== true) {
      let shippingAddress1displayed = this.shipping_address_input1.isDisplayed();
      if (shippingAddress1displayed !== true) {
        this.shipping_address_manual.click();
      }
      fillObject.element(this.shipping_address_country,formcountry);
      fillObject.element(this.RD2019_billing_country,formcountry);
      browser.pause(250);
      let countryChanged = this.countryChanged.isDisplayed();
      if (countryChanged === true) {
        this.countryChanged.click();
      }
      browser.pause(250);
      fillObject.element(this.shipping_address_input1,del_address1);
      fillObject.element(this.shipping_address_input2,Address_line2);
      fillObject.element(this.shipping_address_city,del_city);
      fillObject.element(this.shipping_address_region, Region);
      fillObject.element(this.shipping_address_zip,del_postcode);
    }

    fillObject.element(this.billing_same_as_del, 'on');
    browser.pause(250);
    if (clickAndCollectDetect === true) {
      let billingAddress1displayed = this.billing_address_1.isDisplayed();
      if (billingAddress1displayed !== true) {
        let billingAddressManual = this.billing_address_manual[0];
        billingAddressManual.click();
      }
      fillObject.element(this.billing_country,formcountry);
      browser.pause(250);
      fillObject.element(this.billing_first_name,cusfirstname);
      fillObject.element(this.billing_last_name,cuslastname);
      fillObject.element(this.billing_address_1,del_address1);
      fillObject.element(this.billing_city,del_city);
      fillObject.element(this.shipping_address_region, Region);
      fillObject.element(this.billing_zip,del_postcode);
    }
    Screenshot.viewport();
  }

  payByCard() {
    let paymentData = yaml.load(fs.readFileSync('./data/payments.yml', 'utf8'));
    let creditCardData = paymentData["creditCard"];
    let paymentMethod = "Debit Card";
    let Card_Name = creditCardData["name"];
    let Card_Number = creditCardData["number"];
    let Card_exp = creditCardData["exp"];
    let Cvv = creditCardData["cvv"];
    let debit_credit_card_button = this.paymentButtons;
    debit_credit_card_button[0].click();
    browser.pause(500);
    let Card_name_length = Card_Name.length;
    fillObject.element(this.name_on_card_field,Card_Name);
    browser.pause(500);
    let field_value = this.name_on_card_field.getValue();
    let field_value_length = field_value.length;
    if (field_value_length !== Card_name_length) {
      fillObject.element(this.name_on_card_field,Card_Name);
      browser.pause(500);
    }
    browser.pause(500);
    fillObject.element(this.card_number_field,Card_Number);
    let Card_exp_month = Card_exp.slice(0,2);
    Card_exp_month = parseInt(Card_exp_month, 10);
    this.card_expiry_date_dd_month.selectByIndex(Card_exp_month);
    browser.pause(500);
    let Card_exp_year = Card_exp.slice(3);
    Card_exp_year = parseInt(Card_exp_year,10);
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
  addGiftcards(cardCode,cardPIN) {
    let customerSheet = yaml.load(fs.readFileSync('./data/customers.yml', 'utf8'));
    giftCardUsed = "& giftcard";
    if (cardCode !== undefined) {
      giftcardCode1 = cardCode;
      giftcardPIN1 = cardPIN;
    } else {
      let currentCustomer = customerSheet[emailaddress];
      giftcardPIN1 = currentCustomer["giftcardPIN1"];
      giftcardPIN2 = currentCustomer["giftcardPIN2"];
    }
    if (country === "UK") {
      this.delivery_type_domestic.scrollIntoView();
      this.giftcard_expand.click();
      fillObject.element(this.giftcard_code,giftcardCode1);
      fillObject.element(this.giftcard_pin,giftcardPIN1);
      this.giftcard_submit.click();
      browser.pause(1000);
      if (giftcardCode2 === "") {
      } else {
        let giftcardOpen = this.giftcard_expanded.isExisting();
        if (giftcardOpen === false) {
          this.giftcard_expand.click();
        }
        fillObject.element(this.giftcard_code,giftcardCode2);
        fillObject.element(this.giftcard_pin,giftcardPIN2);
        this.giftcard_submit.click();
        this.giftcard_expand.waitForExist();
      }
    } else {
    }
    browser.pause(3000);
  }
  payByPaypal(){
    let paymentData = yaml.load(fs.readFileSync('./data/payments.yml', 'utf8'));
    let paypalData = paymentData["paypal"];
    let paypal_email = paypalData["email"];
    let paypal_password = paypalData["password"];
    try {
      this.billing_same_as_del.scrollIntoView();
    } catch (e) {}
    browser.pause(1000);
    this.paypal_button.click();
    browser.pause(1000);
    let staffdiscountmodal = this.staffdiscountconfirm.isExisting();
    if (staffdiscountmodal === true) {
      this.staffdiscountconfirm.click();
      this.staffdiscountsubmit.click();
    }
    browser.pause(8000);
    browser.switchToFrame(0);
    this.paypal_checkout_button.waitForEnabled();
    this.paypal_checkout_button.click();
    browser.pause(10000);
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
    write.timestamp('Just before PP check');
    let PPemailExist = this.paypal_email.isExisting();
    console.log('PPemailExist = '+ PPemailExist);
    if (PPemailExist === false) {
      let haveAccountLinkExist = this.paypal_haveaccount.isExisting();
      console.log('haveAccountLinkExist = '+haveAccountLinkExist);
      let counter = 0;
      while (haveAccountLinkExist === false) {
        console.log('haveAccountLinkExist = '+haveAccountLinkExist);
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
    fillObject.element(this.paypal_email,paypal_email);
    browser.pause(1000);
    let passwordEnabled = this.paypal_password.isExisting();
    if (passwordEnabled === false) {
      let btnNxtEnabled = this.paypal_next.isExisting();
      if (btnNxtEnabled === true) {
        this.paypal_next.click();
      }
    }
    browser.pause(1000);
    passwordEnabled = this.paypal_password.isExisting();
    if (passwordEnabled === true) {
      this.paypal_password.setValue(paypal_password);
    }
    Screenshot.viewport();
    browser.pause(3000);
    this.paypal_login.waitForEnabled();
    this.paypal_login.click();
    browser.pause(5000);
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
  this.orderConfirmation();
  }
  orderConfirmation() {
    browser.pause(1500);
    let staffconfirm = this.staffdiscountconfirm;
    let staffdiscountmodal = staffconfirm.isExisting();

    if (staffdiscountmodal === true) {
      this.staffdiscountconfirm.click();
      browser.pause(1500);
      this.staffdiscountsubmit.click();
      browser.pause(1500);
    }
    let orderRef = this.order_reference;
    orderRef.waitForExist();
    referenceNumber = orderRef.getHTML(false);
    let paymentMethod = "Paypal";
    console.log("Order Number: " + referenceNumber + " generated on "+site);
    write.toTextFile("Order Number: " + referenceNumber + " - " + paymentMethod + " " + giftCardUsed + " " +  cusCredit);
    giftCardUsed = "";
    cusCredit = "";
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
      console.log('countDelOptions = '+countDelOptions);
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
      let countDelOptions = objectLength.element(this.deliveryTypeOptions);
      if (countDelOptions > 2) {
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
      if (country === "UK") {collectPoint = "Cheltenham"}
      if (country === "US") {collectPoint = "New York"}
      browser.pause(500);
      fillObject.element(this.collection_location,collectPoint);
      this.collection_location_search_button.click();

      let searchResult = this.collection_location_result.getHTML(false);
      expect(searchResult).to.include(collectPoint);
      if (plus === 'plus') {
        this.collectionShowMore.click();
        browser.pause(500);
        GetRandom.element(this.collectionPlusLocationSelect);
      } else {
        this.collection_location_1stresult_accept.waitForExist();
        this.collection_location_1stresult_accept.click();
      }
    } else {
      this.deliveryTypeOptions[0].click();
      console.log("No C&C in this region - opted for local")
    }
    this.fillTheDeliveryFields();
    this.payByCard();
  }
  selectInternationalShippingAndPay() {
    this.deliveryTypeOptions[2].click();
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
