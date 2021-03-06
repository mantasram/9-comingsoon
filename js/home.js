import { Clock } from "./clock/Clock.js";
import { Form } from "./form/Form.js"
import { Toast } from "./toast/Toast.js";
import { clockData } from "./data/clockData.js";
import { socialsData } from "./data/socialsData.js";
import { socials } from "./socials/socials.js";
import { scrollToTop } from "./footer/footerButton.js";
import { progressbarData } from "./data/progressbarData.js";
import { progress } from "./progress-bar/progressBar.js";


// EXECUTION
const toast = new Toast;
// toast.success('Tau pavyko!');
// toast.info('Pranesame apie si bei ta!');
// toast.warning('Tu cia ziurek..!');

// toast.error('Yra klaida!', 'Nauja antraste');
// toast.error();


new Clock('#clock_1', clockData);
socials('footer .socials', socialsData);
scrollToTop();
progress('.progress-bar', progressbarData);
new Form('.hero form', toast);
new Form('main form', toast);

/*let count = 0;
const timer1 = setInterval(() => {
    if (count < 10) {

    } else {
        clearInterval(timer1)
    }
}, 1000)

1) karta i sekunde isspausdinti po reiksme
2) arejuje nurodyta, kiek sekundziu reikia laukti, kol bus isspausdinta nurodyta reiksme

const a = [2, 3, 1, 4, 2];
let i = 0;
const skaiciuokle = setInterval(() => {
    if(i <a.length) {
        console.log(a[i++]);
    } else {
        clearInterval(skaiciuokle)
    }

}, 1000)
*/