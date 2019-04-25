import Page from './Page'
import {expect} from 'chai';
import Screenshot from './Screenshot';

class Product extends Page {
  get ProductTitle()          {return $('h1.col-12.product-description.lg-first:nth-child(1)');}
  get ProductPrice()          {return $('div.product-price.col-12.lg-first:nth-child(2)');}
  get FreeDelAndRetLink()     {return $('div.free-delivery.delivery.col-12.lg-first');}
  get ModelDetails()          {return $('div.col-12.product-meta-data.lg-first');}
  get SizeContainer()         {return $('div.size-container');}
  get AddToBagButton()        {return $('#add-to-bag-mob > div > fieldset > input');}
  get WishListButton()        {return $('#add-to-bag-mob > div > fieldset > div > span');}
  get ProductDescription()    {return $('div.col-12.description-container');}
  get ProductDescriptionTxt() {return $('div.col-12.description-container > p');}
  get YouMightAlsoLike()      {return $('div.col-12.why-not-try-container > div');}
  get SocialLinks()           {return $('div.col-12.col-md-6.col-lg-7.image-gallery.left-hand-column > div.row > div');}
  get ProductInfo()           {return $('div.product_information_container.d-none.d-md-block > div');}
  get ProductImages()         {return $('div.images_container > div');}
  get ThemeClass()            {return $('div.product-page-container > div');}

  checkPageElements() {
    expect(this.ProductTitle).to.exist;
    expect(this.ProductPrice).to.exist;
    expect(this.FreeDelAndRetLink).to.exist;
    expect(this.ModelDetails).to.exist;
    expect(this.SizeContainer).to.exist;
    expect(this.AddToBagButton).to.exist;
    expect(this.WishListButton).to.exist;
    expect(this.ProductDescription).to.exist;
    expect(this.YouMightAlsoLike).to.exist;
    expect(this.SocialLinks).to.exist;
    expect(this.ProductInfo).to.exist;
    expect(this.ProductImages).to.exist;

    const backgroundColor = this.AddToBagButton.getCSSProperty('background-color');
    let expectedBGColor = '';
    try {
      const CurrentTheme = this.ThemeClass.getAttribute('class');
      expect(CurrentTheme).to.include('theme_sport');
      expectedBGColor = 'lime';
    } catch (e) {
      expectedBGColor = 'orange';
    }
    if (expectedBGColor === 'lime') {
      expect(backgroundColor).to.have.property('value','rgba(141,198,63,1)');
    } else {
      expect(backgroundColor).to.have.property('value','rgba(255,94,0,1)');
    }

    const HeaderFont = this.ProductTitle.getCSSProperty('font');
    expect(HeaderFont).to.have.property('value','normal normal 400 normal 36px / 36px supergroup_bold, arial, "lucida grande", 宋体, simsun, 华文细黑, stxihei, sans-serif');

    const ProductDescriptionTextCSSPropertyFontSize = this.ProductDescriptionTxt.getCSSProperty('font-size');
    expect(ProductDescriptionTextCSSPropertyFontSize).to.have.property('value','13px');
    Screenshot.viewport();
  }
}

export default new Product();
