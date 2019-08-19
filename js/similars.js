'use strict';

(function() {
    var userDialog = document.querySelector('.overlay');
    var similarListElement = userDialog.querySelector('.setup-similar-list');
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
        .content
        .querySelector('.setup-similar-item');
    var SIMILARS = 4;

    var getRandomArrayElements = function(arr, count) {
        var shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
    };

    var renderWizard = function(wizard) {
        var wizardElement = similarWizardTemplate.cloneNode(true);
        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;
        return wizardElement;
    };
    
    // MODULE 6
    var downloadSimilars = function(wizards) {
        var randomWizards = getRandomArrayElements(wizards, SIMILARS);
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < randomWizards.length; i++) {
            fragment.appendChild(renderWizard(randomWizards[i]));
        }
        similarListElement.appendChild(fragment);
        userDialog.querySelector('.setup-similar').classList.remove('hidden');
    };
    window.backend.load(downloadSimilars, window.backend.showErrorMessage);

    var form = userDialog.querySelector('.setup-wizard-form');

    form.addEventListener('submit', function(evt) {
        window.backend.save(new FormData(form), downloadSimilars, window.backend.showErrorMessage);
        userDialog.classList.add('hidden');
        evt.preventDefault();
    });
})();