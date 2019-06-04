import Page from '../Pages/Page'

class objectLength extends Page {
  element(obj) {
    let result = 0;
    for(let prop in obj) {
      if (obj.hasOwnProperty(prop)) {
        result++;
        if (result >= 100) {
          break;
        }
      }
    }
    return result;
}
}
export default new objectLength();
