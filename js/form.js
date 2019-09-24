import AJAX from './ajax.js';

const userDialog = document.querySelector('.overlay');
const userForm = userDialog.querySelector('.setup-wizard-form');

const successHandler = () => {
    userDialog.classList.add('hidden');
    userForm.reset();
};

userForm.addEventListener ('submit', evt => {
    AJAX.save (new FormData(userForm), successHandler, AJAX.errorHandler);
    userDialog.classList.add('hidden');
    evt.preventDefault();
});