import Const from './constants.js';

const setup = document.querySelector('.overlay');
const userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function() {
    if (this.validity.tooShort) {
        this.setCustomValidity(`Name must contain at least ${Const.NAME.MIN} characters`);
    } else if (this.validity.tooLong) {
        this.setCustomValidity(`Name must not exceed ${Const.NAME.MAX} characters`);
    } else if (this.validity.valueMissing) {
        this.setCustomValidity('Enter a name of your character');
    } else {
        this.setCustomValidity('');
    }
});

userNameInput.addEventListener('input', evt => {
    const target = evt.target;
    target.value.length < Const.MIN_NAME_LENGTH ?
    target.setCustomValidity(`Name must contain at least ${Const.NAME.MIN} characters`) :
    target.setCustomValidity('');
});