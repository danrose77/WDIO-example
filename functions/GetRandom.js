import Page from '../Pages/Page'
import objectLength from './objectLength'

class GetRandom extends Page {
    element(elements, successElement, maxResults, Offset) {
        let count = elements.length;
        if (count > 100) {
            count = 99;
        }
        let randomNumber = 1;
        let success = false;
        while (success === false) {
            if ((maxResults !== undefined) || (maxResults !== 0)) {
                if (count > maxResults) {
                    count = maxResults;
                }
            }
            if (Offset === undefined) {
                randomNumber = Math.floor(Math.random() * count);
            } else if (Offset !== 0) {
                randomNumber = Math.floor((Math.random() * count) + Offset);
            } else {
                randomNumber = Math.floor(Math.random() * count);
            }
            let element = elements[randomNumber];
            try {
                element.click();
            } catch (e) {
                console.log("Failed in click attempt, trying again");
            }
            browser.pause(1000);
            if (successElement !== undefined) {
                // successElement set to none will skip success check
                let elementConfirmed = false;
                let counter = 0;
                while (elementConfirmed === false) {
                    browser.pause(1000);
                    elementConfirmed = successElement.isDisplayed();
                    counter = counter + 1;
                    if (counter === 30) {
                        console.log("Element not found");
                        break;
                    }
                    if (elementConfirmed === true) {
                        success = true;
                    }
                }
            } else {
                success = true;
            }
        }
    }

    sizeBox(selectBoxes) {
        let count = objectLength.element(selectBoxes);
        let randomNumber = 0;
        let success = false;

        while (success === false) {
            while (randomNumber === 0) {
                randomNumber = Math.floor(Math.random() * count);
            }
            let element = selectBoxes[randomNumber];
            let invalidBox = element.getAttribute('class');
            if (invalidBox !== 'size-box invalid') {
                element.click();
                success = true;
            } else {
                randomNumber = Math.floor(Math.random() * count);
            }
        }
    }

    selectByIndex(select, options) {
        let count = objectLength.element(options);
        if (count === 0) {

        } else {
            let randomNumber = 0;
            while (randomNumber === 0) {
                randomNumber = Math.floor(Math.random() * count);
            }
            try {
                select.selectByIndex(randomNumber);
            } catch (e) {
            }
        }
    };
}

export default new GetRandom();
