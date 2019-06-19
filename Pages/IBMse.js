import Page from './Page'
import Screenshot from "../functions/Screenshot";
import Environment from "./Environment";
import Product from "./Product";
import objectLength from "../functions/objectLength";

class IBMse extends Page {
  get Username() { return $("#username");}
  get Password() { return $$("#password");}
  get Submit() { return $("#loginBtn");}
  get CustomerServiceViewButton() { return $("#dijit_form_Button_1_label");}
  get returns_ORDER_advanceSearchLink() { return $("#returns_ORDER_advanceSearchLink");}
  get returns_ORDER_scanField() { return $("#returns_ORDER_scanField");}
  get returns_ORDER_scanButton() { return $("#returns_ORDER_scanButton");}
  get returns_ORDER_searchBtn() { return $("#returns_ORDER_searchBtn");}
  get OrderStatus() { return $("div.order-data div.form-view:nth-child(4)");}
  get filterBtn() { return $("#filterBtn > span.btn-icon-font.app-glyphicons.app-icon-filterBy_off");}
  get RefineSections() { return $("span > span.grp-hdr-txt");}
  get order_status() { return $("#order_status");}
  get ApplyFilter() { return $("button.btn.btn-primary.btn-sm");}
  get orderListHolder() { return $("div.display-action > span");}
  get firstOrder() { return $("#list-item_0");}
  get viewFirstOrder() { return $('//*[@id="viewOrderButton_4"]/button');}
  get BackButton() { return $("#goBack");}
  get loadOverlay() { return $("div.loading-overlay");}
  get return_exchange() { return $('#return_exchange_0');}
  get return_reason() { return $('#return_reason_0');}
  get bin_ID() { return $('#bin_ID_0');}
  get addToReturnButton_0() { return $('#addToReturnButton_0');}
  get return_continue() { return $('#reviewReturnBtn > span.btn-text');}
  get return_complete() { return $('#processReturnButton > span.btn-text');}
  get exchange_option() { return $$('#grayBtn');}
  get confirm_exchange_options() { return $('#okReturnReasonMultipleLinesBtn');}
  get userDD() { return $("//a[@title='CSQAtest | UK DC']//span[@class='idxHeaderDropDownArrow']");}
  get logout() { return $("#dijit_MenuItem_1_text");}
  get CSuserDD() { return $("//span[@class='glyphicon glyphicon-chevron-down']");}
  get CSlogout() { return $("//span[@isc-i18n='globals.ACTION_Logout']");}


  login() {
    browser.url('https://sup-oms.qa.coc.ibmcloud.com/wsc/store/login.do');
    browser.pause(3000);
    this.Username.setValue('CSQAtest');
    browser.pause(1000);
    this.Password[1].setValue('CSQApassword*');
    browser.pause(500);
    this.Submit.click();
  }
  returnOrExchangeAnItem(type) {
    this.CustomerServiceViewButton.waitForExist();
    browser.pause(1000);
    this.CustomerServiceViewButton.click();
    this.returns_ORDER_scanField.waitForExist();
    this.returns_ORDER_scanField.setValue(referenceNumber);
    this.returns_ORDER_scanButton.click();
    browser.pause(1000);
    this.loadOverlay.waitForExist(30000,true);
    browser.pause(1000);
    if (type === 'return') {
      this.return_exchange.selectByAttribute('value','string:Return');
    } else if (type === 'exchange') {
      this.return_exchange.selectByAttribute('value','string:Exchange');
    } else {
    }
    browser.pause(500);
    this.return_reason.selectByAttribute('value','string:500');
    browser.pause(500);
    this.bin_ID.setValue('Bin500');
    Screenshot.viewport();
    browser.pause(1000);
    this.addToReturnButton_0.click();
    browser.pause(7000);
    try {
      this.return_continue.click();
    } catch (e) {
      console.log(e);
    }
    browser.pause(1000);
    if (type === 'exchange') {
      let count = objectLength.element(this.exchange_option);
      let randomNumber = Math.floor(Math.random() * count);
      let element = this.exchange_option[randomNumber];
      element.click();
      browser.pause(1000);
      Screenshot.viewport();
      this.confirm_exchange_options.click();
      browser.pause(1000);
    }
    browser.pause(3000);
    this.return_complete.click();
    browser.pause(7000);
    this.CSuserDD.click();
    browser.pause(1000);
    this.CSlogout.click();
    browser.pause(1000);
    browser.acceptAlert();
  }
  
}

export default new IBMse();
