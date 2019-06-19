import Page from './Page'
import Navigation from './/Navigation.js';
import fillObject from '../functions/fillObject'
import * as yaml from "js-yaml";
import shopperGroupIDfunc from "../functions/shopperGroupID";
import objectLength from "../functions/objectLength";

class Customer extends Page {
  get username()                    {return $("//input[@id='username_login']");}
  get password()                    {return $("//input[@id='passwd_login']");}
  get signInButton()                {return $("//input[@name='Submit']");}
  get signOutButton()               {return $("//a[@class='btn btn-light btn-logout']");}
  get registerButton()              {return $("//a[@class='btn btn-primary register-link']");}
  get registerPageEmail()           {return $("//input[@id='email']");}
  get registerPagePhone1()          {return $("//input[@id='phone_1']");}
  get registerPagePhone2()          {return $("//input[@id='phone_2']");}
  get registerPagePassword1()       {return $("//input[@id='password']");}
  get registerPagePassword2()       {return $("//input[@id='password2']");}
  get registerPageGenderSelect()    {return $("//select[@id='vm_gender']");}
  get registerPageMarketing()       {return $("//input[@id='vm_marketing']");}
  get registerPageFirstName()       {return $("//input[@id='first_name']");}
  get registerPageLastName()        {return $("//input[@id='last_name']");}
  get manualAddress()               {return $("//a[@id='address-manual']");}
  get registerPageButtonRegister()  {return $("//input[@type='submit']");}
  get confirmTerms()                {return $("//input[@id='confirm-terms']");}
  get confirmProceed()              {return $("//a[contains(@class,'confirm')]//span");}
  get delInfo()                     {return $("//div[@id='menu-buttons']//a[2]");}
  get addNewAddress()               {return $("//a[@class='btn btn-light btn-add-address']");}
  get addressType()                 {return $("//input[@id='address_type_name']");}
  get firstName()                   {return $("//input[@id='first_name']");}
  get lastName()                    {return $("//input[@id='last_name']");}
  get address1()                    {return $("//input[@id='address_1']");}
  get switchToManual()              {return $("//div[@class='lookup-container']//a[@id='address-manual']");}
  get address2()                    {return $("//input[@id='address_2']");}
  get city()                        {return $("//input[@id='city']");}
  get region()                      {return $("//select[@id='state']");}
  get zip()                         {return $("//input[@id='zip']");}
  get country()                     {return $("//select[@id='country']");}
  get phone1()                      {return $("//input[@id='phone_1']");}
  get phone2()                      {return $("//input[@id='phone_2']");}
  get saveBTN()                     {return $("//input[@type='submit']");}
  get deliveryAddressList()         {return $$("div[class='col-12 delivery-addresses'] > a");}

  // Functions
  setUpNewAccount(email) {
    let customerSheet = yaml.load(fs.readFileSync('./data/customers.yml', 'utf8'));
    if (email === undefined) {
      let screendate = new Date();
      emailaddress = "danrosetest+" + screendate.getTime() + "@gmail.com";
      customerData = customerSheet[country];
    } else {
      emailaddress = email;
      customerData = customerSheet[email];
      del_YorN = customerData["del_YorN"];
    }
    giftcard_only = emailaddress.split("!");
    giftcard_only = giftcard_only[0];
    if (giftcard_only === "giftcard_only") {

    } else {
      First_name = customerData["First_name"];
      Last_name = customerData["Last_name"];
      Phone = customerData["Phone"];
      Address_line1 = customerData["Address_line1"];
      Address_line2 = customerData["Address_line2"];
      City = customerData["City"];
      Region = customerData["Region"];
      Postcode = customerData["Postcode"];
      shopperGroupID = shopperGroupIDfunc.pick();

      this.signIn(email);
      let logOutButtonExist = this.signOutButton.isExisting();
      if (logOutButtonExist === false) {
        this.registerButton.click();
        browser.pause(2000);
        fillObject.element(this.registerPageEmail, emailaddress);
        fillObject.element(this.registerPagePassword1, newPassword);
        fillObject.element(this.registerPagePassword2, newPassword);
        fillObject.element(this.registerPagePhone1, Phone);
        fillObject.element(this.registerPagePhone2, Phone);
        this.registerPageGenderSelect.selectByIndex(1);
        fillObject.element(this.registerPageFirstName, First_name);
        fillObject.element(this.registerPageLastName, Last_name);
        browser.pause(1000);
        try {this.manualAddress.click()} catch (err) {}
        if (country === "US") {country = "United States"}
        try {fillObject.element(this.country, country)} catch (err) {}
        try {fillObject.element(this.address1, Address_line1)} catch (err) {}
        try {fillObject.element(this.address2, Address_line2)} catch (err) {}
        try {fillObject.element(this.city, City)} catch (err) {}
        try {fillObject.element(this.region, Region)} catch (err) {}
        try {fillObject.element(this.zip, Postcode)} catch (err) {}
        browser.pause(500);
        try {this.registerPageGenderSelect.scroll()} catch (err) {}
        try {this.registerPageMarketing.click()} catch (err) {}
        browser.pause(1000);
        try {this.registerPageButtonRegister.click()} catch (err) {}
        browser.pause(1000);
        try {this.confirmTerms.click()} catch (err) {browser.pause(1000)}
        this.confirmProceed.click();
        browser.pause(1000);
      } else {
      }
    }
  }
  addDeliveryAddress(){
    if (giftcard_only === "giftcard_only") {
    } else {
      let customerSheet = yaml.load(fs.readFileSync('./data/customers.yml', 'utf8'));
      customerData = customerSheet[emailaddress];
      del_YorN = customerData["del_YorN"];
      if (del_YorN === "Y" || formcountry !== "") {
        del_address1 = customerData["del_address1"];
        del_city = customerData["del_city"];
        del_region = customerData["del_region"];
        del_postcode = customerData["del_postcode"];
        del_country = customerData["del_country"];
        if (formcountry !== "") {
          del_country = formcountry;
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
          if (linkText === del_country) {
            found = true;
          }
          counter = counter + 1;
          if (counter === numberOfDelAdds) { break; }
        }
        if (found === false) {
          this.addNewAddress.click();
          browser.pause(500);
          fillObject.element(this.addressType, del_country);
          fillObject.element(this.firstName, First_name);
          fillObject.element(this.lastName, Last_name);
          browser.pause(1000);
          try{this.switchToManual.click()} catch (e) {}
          this.saveBTN.scrollIntoView();
          fillObject.element(this.address1, del_address1);
          browser.pause(500);
          fillObject.element(this.city, del_city);
          browser.pause(500);
          fillObject.element(this.zip, del_postcode);
          browser.pause(500);
          fillObject.element(this.country, del_country);
          browser.pause(500);
          try{fillObject.element(this.region, del_region)} catch (e) {}
          browser.pause(500);
          fillObject.element(this.phone1, Phone);
          fillObject.element(this.phone2, Phone);
          this.saveBTN.click();
          browser.pause(1500);
        }else {
        }
      } else {
      }
    }
  }
  signIn(email){
    if (emailaddress === undefined || emailaddress === "") {
      emailaddress = email;
    }
    Navigation.MyAccount.click();
    let logOutButtonExist = this.signOutButton.isExisting();
    if (logOutButtonExist === true) {
      this.signOutButton.click();
    }
    browser.refresh();
    browser.pause(500);
    fillObject.element(this.username, emailaddress);
    fillObject.element(this.password, newPassword);
    //try{this.cookieConsentClose.click()} catch (e) {}
    this.signInButton.click();
    browser.pause(1000);
  }
}
export default new Customer();
