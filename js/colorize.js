import { updateSimilars } from './similars.js';

const wizardRobe = document.querySelector('.setup-wizard .wizard-coat');
const wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
const fireball = document.querySelector('.setup-fireball-wrap');

// const robeColors = ['hsl(0, 100%, 65%)', 'hsl(0, 0%, 65%)', 'hsl(60, 20%, 50%)', 'hsl(80, 100%, 30%)', 'hsl(180, 100%, 20%)', 'hsl(40, 100%, 30%)', 'hsl(240, 20%, 50%)', 'hsl(0, 50%, 40%)', 'hsl(210, 100%, 40%)', 'rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(141, 136, 0)', 'rgb(0, 0, 0)'];
// const eyesColors = ['hsl(225, 100%, 60%)', 'hsl(120, 60%, 50%)', 'hsl(40, 100%, 15%)', 'hsl(180, 20%, 50%)', 'hsl(30, 100%, 5%)', 'hsl(0, 100%, 40%)'];
const Color = {
    ROBE: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
    EYES: ['black', 'red', 'blue', 'yellow', 'green'],
    FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848']
};

const CurrentColor = {
    ROBE: '',
    EYES: '',
    FIREBALL: ''
};

const colorize = colors => {
    let count = 0;
    return function() {
        count === colors.length - 1 ? count = 0 : count++;
        if (colors === Color.FIREBALL) {
            this.style.backgroundColor = colors[count]
            Current.FIREBALL = colors[count];
        } else {
            this.style.fill = colors[count];
            if (colors === Color.ROBE) {
                CurrentColor.ROBE = colors[count];
                updateSimilars();
            } else {
                CurrentColor.EYES = colors[count];
                updateSimilars();
            }
        }  
    }
};

const changeRobeColor = colorize (Color.ROBE);
const changeEyesColor = colorize (Color.EYES);
const changeFireballColor = colorize (Color.FIREBALL);

wizardRobe.addEventListener ('click', changeRobeColor);
wizardEyes.addEventListener ('click', changeEyesColor);
fireball.addEventListener ('click', changeFireballColor);

export { CurrentColor };