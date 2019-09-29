import Wizard from './wizard.js';

const wizardRobe = document.querySelector('.setup-wizard .wizard-coat');
const wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
const fireball = document.querySelector('.setup-fireball-wrap');

export const Marijuan = new Wizard({ name: 'Marijuan', robeColor: null, eyesColor: null, fireballColor: null, artifacts: null });

wizardRobe.addEventListener('click', () => {
    wizardRobe.style.fill = Marijuan.changeRobeColor();
});
wizardEyes.addEventListener('click', () => {
    wizardEyes.style.fill = Marijuan.changeEyesColor();
});
fireball.addEventListener('click', () => {
    fireball.style.backgroundColor = Marijuan.changeFireballColor();
});