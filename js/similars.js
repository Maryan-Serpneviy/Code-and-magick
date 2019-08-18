'use strict';

(function() {
    var userDialog = document.querySelector('.overlay');
    var similarListElement = userDialog.querySelector('.setup-similar-list');
    var similarWizardTemplate = document.querySelector('#similar-wizard-template')
        .content
        .querySelector('.setup-similar-item');

    var ROBE_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    window.robeColors = ['hsl(0, 100%, 65%)', 'hsl(0, 0%, 65%)', 'hsl(60, 20%, 50%)', 'hsl(80, 100%, 30%)', 'hsl(180, 100%, 20%)', 'hsl(40, 100%, 30%)', 'hsl(240, 20%, 50%)', 'hsl(0, 50%, 40%)', 'hsl(210, 100%, 40%)', 'rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(141, 136, 0)', 'rgb(0, 0, 0)'];
    window.eyesColors = ['hsl(225, 100%, 60%)', 'hsl(120, 60%, 50%)', 'hsl(40, 100%, 15%)', 'hsl(180, 20%, 50%)', 'hsl(30, 100%, 5%)', 'hsl(0, 100%, 40%)'];
    window.FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
    var WIZARDS = 4;
    var URL = 'https://js.dump.academy/code-and-magick/data';

    var renderWizard = function(wizard) {
        var wizardElement = similarWizardTemplate.cloneNode(true);
        wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
        wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
        wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

        return wizardElement;
    };

    var successHandler = function(wizards) {
        var fragment = document.createDocumentFragment();
        for (var i = 0; i < WIZARDS; i++) {
            fragment.appendChild(renderWizard(wizards[i]));
        }
        similarListElement.appendChild(fragment);
        userDialog.querySelector('.setup-similar').classList.remove('hidden');
    };

    var errorHandler = function(errorMessage) {
        var node = document.createElement('div');
        node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;'
        node.style.position = 'absolute';
        node.style.left = 0;
        node.style.right = 0;
        node.style.fontSize = '30px';

        node.textContent = errorMessage;
        document.body.insertAdjacentElement('afterbegin', node);
    };
    window.download(successHandler, errorHandler, URL);

    var form = userDialog.querySelector('.setup-wizard-form');
    form.addEventListener('submit', function(evt) {
        window.upload(new FormData(form), function(response) {
            userDialog.classList.add('hidden');
        });
        evt.preventDefault();
    });
})();