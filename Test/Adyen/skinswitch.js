import Environment from '../../Pages/Environment.js';
import Adyen from "../../Pages/Adyen";

describe('Change Adyen skin', () => {
    it('Open adyen and login', () => {
        Environment.openBaseURL();
        Environment.openURL('https://ca-test.adyen.com/');
        Adyen.adyenLogin("Dan.rose","!yL2SjGAZ!TU&Kn6");
    });
    it('Switch skins for listed sites', () => {
        // Adyen.changeSkin("au");
        // Adyen.changeSkin("befr");
        // Adyen.changeSkin("benl");
        // Adyen.changeSkin("caen");
        // Adyen.changeSkin("cafr");
        // Adyen.changeSkin("chde");
        // Adyen.changeSkin("chfr");
        Adyen.changeSkin("com");
        Adyen.changeSkin("de");
        // Adyen.changeSkin("dk");
        // Adyen.changeSkin("es");
        // Adyen.changeSkin("fi");
        // Adyen.changeSkin("fr");
        // Adyen.changeSkin("gr");
        // Adyen.changeSkin("hken");
        // Adyen.changeSkin("hkzh");
        // Adyen.changeSkin("ie");
        // Adyen.changeSkin("it");
        Adyen.changeSkin("nl");
        // Adyen.changeSkin("no");
        // Adyen.changeSkin("pl");
        // Adyen.changeSkin("se");
        // Adyen.changeSkin("tw");
        // Adyen.changeSkin("us");
    });
});
