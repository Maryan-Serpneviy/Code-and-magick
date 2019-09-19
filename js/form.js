const userDialog = document.querySelector('.overlay');
const form = userDialog.querySelector('.setup-wizard-form');
form.addEventListener ('submit', evt => {
    backend.save (new FormData(form), downloadSimilars, backend.errorHandler);
    userDialog.classList.add('hidden');
    evt.preventDefault();
});