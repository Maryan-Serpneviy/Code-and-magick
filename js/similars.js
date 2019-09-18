import Utils from './utils.js';
import backend from './backend.js';

const userDialog = document.querySelector('.overlay');
const similarListElement = userDialog.querySelector('.setup-similar-list');
const similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
const SIMILARS = 4;

const renderWizard = wizard => {
    const wizardElement = similarWizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
    return wizardElement;
};

// MODULE 6
const downloadSimilars = wizards => {
    const randomWizards = Utils.getRandomArrayElements(wizards, SIMILARS);
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < randomWizards.length; i++) {
        fragment.appendChild(renderWizard(randomWizards[i]));
    }
    similarListElement.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
};
backend.load (downloadSimilars, backend.errorHandler);
const form = userDialog.querySelector('.setup-wizard-form');
form.addEventListener ('submit', evt => {
    backend.save (new FormData(form), downloadSimilars, backend.errorHandler);
    userDialog.classList.add('hidden');
    evt.preventDefault();
});