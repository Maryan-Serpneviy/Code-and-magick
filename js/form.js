import AJAX from './ajax.js';

const userDialog = document.querySelector('.overlay');
const userForm = userDialog.querySelector('.setup-wizard-form');

const successHandler = () => {
    userDialog.classList.add('hidden');
    userForm.reset();
};

userForm.addEventListener('submit', evt => {
    evt.preventDefault();
    AJAX.save(new FormData(userForm), successHandler, AJAX.statusHandler, 'uploaded');
});