import AJAX from './ajax.js';

const userDialog = document.querySelector('.overlay');
const form = userDialog.querySelector('.setup-wizard-form');
form.addEventListener ('submit', evt => {
    AJAX.save (new FormData(form), downloadSimilars, AJAX.errorHandler);
    userDialog.classList.add('hidden');
    evt.preventDefault();
});