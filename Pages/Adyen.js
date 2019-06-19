import Page from './Page'

class Adyen extends Page {
  get Test()          {return $('//*[@id="subcontent"]/div[1]/div/form/div[2]/div[1]/div[1]/a[2]');}
  get Account()          {return $('//*[@id="subcontent"]/div[1]/div/form/div[2]/div[1]/div[2]/div/div[2]//input');}
  get Username()          {return $("//input[@id='j_username']");}
  get Password()          {return $("//input[@id='j_password']");}
  get Submit()          {return $("//input[contains(@value,'Log in')]");}

  get TransactionsMenu()          {return $("//div[contains(text(),'Transactions')]");}
  get OffersMenu()          {return $("//span[contains(text(),'Offers')]");}

  get OfferList()          {return $("td a");}
  get Promote()          {return $("//input[@name='promote']");}

  get AccountMenu()          {return $("//div[contains(text(),'Account')]");}
  get SkinsMenu()          {return $("//span[contains(text(),'Skins')]");}

  get skin_au()          {return $("//a[contains(text(),'superdry.au skin')]");}
  get skin_befr()          {return $("//a[contains(text(),'superdry.befr skin')]");}
  get skin_benl()          {return $("//a[contains(text(),'superdry.benl skin')]");}
  get skin_caen()          {return $("//a[contains(text(),'superdry.caen skin')]");}
  get skin_cafr()          {return $("//a[contains(text(),'superdry.cafr skin')]");}
  get skin_chde()          {return $("//a[contains(text(),'superdry.chde skin')]");}
  get skin_chfr()          {return $("//a[contains(text(),'superdry.chfr skin')]");}
  get skin_cn()          {return $("//a[contains(text(),'superdry.cn skin')]");}
  get skin_com()          {return $("//a[contains(text(),'superdry.com skin')]");}
  get skin_de()          {return $("//a[contains(text(),'superdry.de skin')]");}
  get skin_dk()          {return $("//a[contains(text(),'superdry.dk skin')]");}
  get skin_es()          {return $("//a[contains(text(),'superdry.es skin')]");}
  get skin_fi()          {return $("//a[contains(text(),'superdry.fi skin')]");}
  get skin_fr()          {return $("//a[contains(text(),'superdry.fr skin')]");}
  get skin_gr()          {return $("//a[contains(text(),'superdry.gr skin')]");}
  get skin_hken()          {return $("//a[contains(text(),'superdry.hken skin')]");}
  get skin_hkzh()          {return $("//a[contains(text(),'superdry.hkzh skin')]");}
  get skin_ie()          {return $("//a[contains(text(),'superdry.ie skin')]");}
  get skin_it()          {return $("//a[contains(text(),'superdry.it skin')]");}
  get skin_kr()          {return $("//a[contains(text(),'superdry.kr skin')]");}
  get skin_nl()          {return $("//a[contains(text(),'superdry.nl skin')]");}
  get skin_no()          {return $("//a[contains(text(),'superdry.no skin')]");}
  get skin_pl()          {return $("//a[contains(text(),'superdry.pl skin')]");}
  get skin_se()          {return $("//a[contains(text(),'superdry.se skin')]");}
  get skin_tw()          {return $("//a[contains(text(),'superdry.tw skin')]");}
  get skin_us()          {return $("//a[contains(text(),'superdry.us skin')]");}
  
  get resultURL()          {return $("//*[@id='skin-details-and-hmacs']/table[2]/tbody[2]/tr[1]/td[1]/input");}
  get continueURL()          {return $("//*[@id='skin-details-and-hmacs']/table[2]/tbody[2]/tr[2]/td[1]/input");}
  get saveSkin()          {return $("//input[contains(@value,'Save Skin to Test')]");}

  adyenLogin(username, password) {
    browser.pause(1250);
    this.Test.click();
    //this.Account.clearElement();
    this.Account.setValue("SuperGroup");
    this.Username.setValue(username);
    this.Password.setValue(password);
    this.Submit.click();
  }
  changeSkin(site) {
    this.AccountMenu.click();
    browser.pause(250);
    this.SkinsMenu.click();
    browser.pause(250);

    switch (site) {
      case 'au':
        this.skin_au.click();
        break;
      case 'befr':
        this.skin_befr.click();
        break;
      case 'benl':
        this.skin_benl.click();
        break;
      case 'caen':
        this.skin_caen.click();
        break;
      case 'cafr':
        this.skin_cafr.click();
        break;
      case 'chde':
        this.skin_chde.click();
        break;
      case 'chfr':
        this.skin_chfr.click();
        break;
      case 'cn':
        this.skin_cn.click();
        break;
      case 'com':
        this.skin_com.click();
        break;
      case 'de':
        this.skin_de.click();
        break;
      case 'dk':
        this.skin_dk.click();
        break;
      case 'es':
        this.skin_es.click();
        break;
      case 'fi':
        this.skin_fi.click();
        break;
      case 'fr':
        this.skin_fr.click();
        break;
      case 'gr':
        this.skin_gr.click();
        break;
      case 'hken':
        this.skin_hken.click();
        break;
      case 'hkzh':
        this.skin_hkzh.click();
        break;
      case 'ie':
        this.skin_ie.click();
        break;
      case 'it':
        this.skin_it.click();
        break;
      case 'kr':
        this.skin_kr.click();
        break;
      case 'nl':
        this.skin_nl.click();
        break;
      case 'no':
        this.skin_no.click();
        break;
      case 'se':
        this.skin_se.click();
        break;
      case 'tw':
        this.skin_tw.click();
        break;
      case 'us':
        this.skin_us.click();
        break;
      case 'pl':
        this.skin_pl.click();
    }
    browser.pause(500);
    try{
      let initialResultURL = this.resultURL.getValue();
      let hyphenSplitArray = initialResultURL.split("-");
      let dotSplitArray = hyphenSplitArray[1];
      dotSplitArray = dotSplitArray.split(".");
      let adyenLinkNew = "";
      if (hyphenSplitArray[2] === undefined) {
        adyenLinkNew = hyphenSplitArray[0]+"-"+envcol+"."+dotSplitArray[1]+"."+dotSplitArray[2]+"."+dotSplitArray[3]+"."+dotSplitArray[4]+"."+dotSplitArray[5];
      } else {
        adyenLinkNew = hyphenSplitArray[0]+"-"+envcol+"."+dotSplitArray[1]+"."+dotSplitArray[2]+"."+dotSplitArray[3]+"."+dotSplitArray[4]+"-"+hyphenSplitArray[2];
      }
      if (adyenLinkNew !== initialResultURL) {
        this.resultURL.setValue(adyenLinkNew);
        this.continueURL.setValue(adyenLinkNew);
        this.saveSkin.click();
        console.log("Successfully changed skin for '"+site+"'")
      } else {
        console.log("No need to change skin for '"+site+"'")
      }
    } catch (e) {
    }
  }
}

export default new Adyen();
