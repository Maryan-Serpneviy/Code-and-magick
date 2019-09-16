const MIN_NAME_LENGTH = 5;
const setup = document.querySelector('.overlay');
const userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener ('invalid', () => {
    if (userNameInput.validity.tooShort) {
        userNameInput.setCustomValidity ('Name must be at least 5 characters long');
    } else if (userNameInput.validity.tooLong) {
        userNameInput.setCustomValidity ('Name must not exceed 25 characters');
    } else if (userNameInput.validity.valueMissing) {
        userNameInput.setCustomValidity ('Type the name of your character');
    } else {
        userNameInput.setCustomValidity('');
    }
});

userNameInput.addEventListener ('input', evt => {
    const target = evt.target;
    target.value.length < MIN_NAME_LENGTH ?
    target.setCustomValidity('Name must be at least 2 characters long') : 
    target.setCustomValidity('');
});