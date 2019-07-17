import Page from '../Pages/Page'

class shopperGroupIDfunc extends Page {
    pick() {
        let result = 0;
        switch (country) {
            case 'Germany':
                result = 1;
                break;
            case 'UK':
                result = 2;
                break;
            case 'France':
                result = 4;
                break;
            case 'Ireland':
                result = 6;
                break;
            case 'Belgium':
                result = 7;
                break;
            case 'Spain':
                result = 8;
                break;
            case 'Finland':
                result = 9;
                break;
            case 'Canada':
                result = 10;
                break;
            case 'Italy':
                result = 11;
                break;
            case 'Switzerland':
                result = 12;
                break;
            case 'Denmark':
                result = 13;
                break;
            case 'Norway':
                result = 14;
                break;
            case 'Sweden':
                result = 15;
                break;
            case 'Australia':
                result = 16;
                break;
            case 'US':
                result = 17;
                break;
            case 'China':
                result = 19;
                break;
            case 'Taiwan':
                result = 20;
                break;
            case 'Poland':
                result = 36;
                break;
            case 'HongKong':
                result = 38;
                break;
            case 'Netherlands':
                result = 39;
                break;
            default:
                result = 3;
        }
        return result;
    }
}

export default new shopperGroupIDfunc();
