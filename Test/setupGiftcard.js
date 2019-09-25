import Givex from "../Pages/Givex";

let giftcard = '6338901547310003689';

// Run on a desktop browser

describe('Set up gift card', () => {
    it('Set up a gift card', () => {
        if (formFactor !== 'mobile') {
            Givex.login();
            Givex.setupGiftcards(giftcard);
        }
    });
});
