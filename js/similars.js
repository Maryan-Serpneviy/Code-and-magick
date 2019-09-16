'use strict';

(function() {
    const userDialog = document.querySelector('.overlay');
    const similarListElement = userDialog.querySelector('.setup-similar-list');
    const similarWizardTemplate = document.querySelector('#similar-wizard-template')
        .content
        .querySelector('.setup-similar-item');
    const SIMILARS = 4;

    const getRandomArrayElements = (arr, count) => {
        let shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
    };

    const renderWizard = wizard => {
        const wizardElement = similarWizardTemplate.cloneNode(true);
        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
        return wizardElement;
    };
    
    // MODULE 6
    const downloadSimilars = wizards => {
        const randomWizards = getRandomArrayElements(wizards, SIMILARS);
        const fragment = document.createDocumentFragment();
        for (let i = 0; i < randomWizards.length; i++) {
            fragment.appendChild(renderWizard(randomWizards[i]));
        }
        similarListElement.appendChild(fragment);
        userDialog.querySelector('.setup-similar').classList.remove('hidden');
    };
    window.backend.load (downloadSimilars, window.backend.errorHandler);

    const form = userDialog.querySelector('.setup-wizard-form');

    form.addEventListener ('submit', evt => {
        window.backend.save (new FormData(form), downloadSimilars, window.backend.errorHandler);
        userDialog.classList.add('hidden');
        evt.preventDefault();
    });
})();