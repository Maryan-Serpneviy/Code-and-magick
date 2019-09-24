import Const from './constants.js';

const setup = document.querySelector('.overlay');
const userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', () => {
    if (userNameInput.validity.tooShort) {
        userNameInput.setCustomValidity(`Name must contain at least ${Const.NAME.MIN} characters`);
    } else if (userNameInput.validity.tooLong) {
        userNameInput.setCustomValidity(`Name must not exceed ${Const.NAME.MAX} characters`);
    } else if (userNameInput.validity.valueMissing) {
        userNameInput.setCustomValidity('Enter a name of your character');
    } else {
        userNameInput.setCustomValidity('');
    }
});

userNameInput.addEventListener('input', evt => {
    const target = evt.target;
    target.value.length < Const.MIN_NAME_LENGTH ?
    target.setCustomValidity(`Name must contain at least ${Const.NAME.MIN} characters`) : 
    target.setCustomValidity('');
});