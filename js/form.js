import AJAX from './ajax.js';
import Util from './utils.js';

const userDialog = document.querySelector('.overlay');
const userForm = userDialog.querySelector('.setup-wizard-form');
const wizardElement = userDialog.querySelector('.setup-wizard');
const wizardRobeElement = wizardElement.querySelector('.wizard-coat');
const wizardEyesElement = wizardElement.querySelector('.wizard-eyes');

const successHandler = () => {
    userDialog.classList.add('hidden');
    userForm.reset();
};

userForm.addEventListener('submit', function(evt) {
    evt.preventDefault();
    const wizardCopy = document.querySelector('svg').cloneNode(true);

    wizardCopy.querySelector('#wizard-coat').style.fill = wizardRobeElement.style.fill;
    wizardCopy.querySelector('#wizard-eyes').style.fill = wizardEyesElement.style.fill;

    const wizardBase64 = Util.svg2base64(wizardCopy);
    window.restartGame(wizardBase64, wizardBase64);
    AJAX.save(new FormData(this), successHandler, AJAX.statusHandler, 'uploaded');
});