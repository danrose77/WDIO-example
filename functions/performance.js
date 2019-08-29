import Page from '../Pages/Page'

class performance extends Page {
    generateSpacing(spacing_length) {
        let counter = 0;
        let string_return = "";
        while (counter < spacing_length) {
            string_return = string_return + " ";
            counter++;
        }
        return string_return;
    }
    performanceScore100(input) {
        let score = input.toString().split(".")[1];
        score = score.slice(0,2);
        score = score + "/100";
        return score;
    }
}

export default new performance();
