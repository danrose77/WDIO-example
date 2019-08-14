import Page from '../Pages/Page'

class ElementVerification extends Page {
    withinBounds(element, x_min, x_max, y_min, y_max) {
        if (x_min !== undefined) {
            let x = element.getLocation()["x"];
            expect(x).to.be.at.least(x_min);
            expect(x).to.be.at.most(x_max);
        }
        if (y_min !== undefined) {
            let y = element.getLocation()["y"];
            expect(y).to.be.at.least(y_min);
            expect(y).to.be.at.most(y_max);
        }
    }
    sizeAtLeast(element, width_min, height_min) {
        let width = element.getSize()["width"];
        let height = element.getSize()["height"];
        expect(width).to.be.at.least(width_min);
        expect(height).to.be.at.least(height_min);
    }
}

export default new ElementVerification();
