import Const from './constants.js';
import Util from './utils.js';
import { updateSimilars } from './update.js';

const wizardRobe = document.querySelector('.setup-wizard .wizard-coat');
const wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
const fireball = document.querySelector('.setup-fireball-wrap');

const CurrentColor = {
    ROBE: '',
    EYES: '',
    FIREBALL: ''
};

const colorize = colors => {
    let count = 0;
    return function() {
        count === colors.length - 1 ? count = 0 : count++;
        if (colors === Const.COLOR.FIREBALL) {
            this.style.backgroundColor = colors[count];
            CurrentColor.FIREBALL = colors[count];
            Util.debounce(updateSimilars, Const.TIMEOUT.DEBOUNCE);
        } else {
            this.style.fill = colors[count];
            if (colors === Const.COLOR.ROBE) {
                CurrentColor.ROBE = colors[count];
                Util.debounce(updateSimilars, Const.TIMEOUT.DEBOUNCE);
            } else {
                CurrentColor.EYES = colors[count];
                Util.debounce(updateSimilars, Const.TIMEOUT.DEBOUNCE);
            }
        }  
    }
};

const changeRobeColor = colorize (Const.COLOR.ROBE);
const changeEyesColor = colorize (Const.COLOR.EYES);
const changeFireballColor = colorize (Const.COLOR.FIREBALL);

wizardRobe.addEventListener ('click', changeRobeColor);
wizardEyes.addEventListener ('click', changeEyesColor);
fireball.addEventListener ('click', changeFireballColor);

export { CurrentColor };