import Page from './Page'
import fillObject from "../functions/fillObject";
import * as yaml from "js-yaml";
import Screenshot from "../functions/Screenshot";
import write from "../functions/write";

class Checkout extends Page {
  get billing_address_manual()  {return $('a[class|=address-finder-toggle]');}
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
  get billing_address_manual()  {return $("a[class|='address-finder-toggle']");}
  get billing_country()         {return $("input[id|='checkout-billing-country-select']");}
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
  
  // Functions
  fillTheDeliveryFields() {
    let formcountry = country;
    if (country === "UK") {
      formcountry = "United Kingdom";
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

    let billing_address_manual = this.billing_address_manual.isExisting();
    if (billing_address_manual === true) {
      this.billing_address_manual.click();
    }
    fillObject.element(this.shipping_first_name, cusfirstname);
    fillObject.element(this.shipping_last_name,cuslastname);
    fillObject.element(this.billing_phone,Phone);
    fillObject.element(this.billing_email,Email);
    fillObject.element(this.billing_confirmemail,Email);
    browser.pause(250);
    fillObject.element(this.shipping_address_country,formcountry);
    fillObject.element(this.RD2019_billing_country,formcountry);
    browser.pause(250);
    let countryChanged = this.countryChanged.isDisplayed();
    if (countryChanged === true) {
      browser.click(this.countryChanged);
    }
    browser.pause(250);
    fillObject.element(this.shipping_address_input1,del_address1);
    fillObject.element(this.shipping_address_input2,Address_line2);
    fillObject.element(this.shipping_address_city,del_city);
    fillObject.element(this.shipping_address_region, Region);
    fillObject.element(this.shipping_address_zip,del_postcode);
    // } See line 46
    fillObject.element(this.billing_same_as_del, 'on');
    browser.pause(250);
    let billing_country = this.billing_country.isDisplayed();
    if (billing_country === true) {
      browser.click(this.billing_country);
    }
    fillObject.element(this.billing_country,formcountry);
    browser.pause(250);
    fillObject.element(this.billing_first_name,cusfirstname);
    fillObject.element(this.billing_last_name,cuslastname);
    fillObject.element(this.billing_address_1,del_address1);
    fillObject.element(this.billing_city,del_city);
    fillObject.element(this.shipping_address_region, Region);
    fillObject.element(this.billing_zip,del_postcode);
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
    let referenceNumber = orderRef.getHTML(false);
    console.log("Order Number: " + referenceNumber + " generated on "+site);
    write.toTextFile("Order Number: " + referenceNumber + " - " + paymentMethod + " " + giftCardUsed + " " +  cusCredit);
    giftCardUsed = "";
    cusCredit = "";
    Screenshot.viewport();
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
}

export default new Checkout();
