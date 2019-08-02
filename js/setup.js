'use strict';

var userDialog = document.querySelector('.overlay');
var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var robeColors = ['hsl(0, 100%, 65%)', 'hsl(0, 0%, 65%)', 'hsl(60, 20%, 50%)', 'hsl(80, 100%, 30%)', 'hsl(180, 100%, 20%)', 'hsl(40, 100%, 30%)', 'hsl(240, 20%, 50%)', 'hsl(0, 50%, 40%)', 'hsl(210, 100%, 40%)', 'rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(141, 136, 0)', 'rgb(0, 0, 0)'];

var eyesColors = ['hsl(225, 100%, 60%)', 'hsl(120, 60%, 50%)', 'hsl(40, 100%, 15%)', 'hsl(180, 20%, 50%)', 'hsl(30, 100%, 5%)', 'hsl(0, 100%, 40%)'];

var  generateRandomData = function(firstNames, lastNames, robeColors, eyesColors) {
    var randomData = [];
    var name = firstNames[parseInt(Math.random() * firstNames.length)] + ' ' + lastNames[parseInt(Math.random() * lastNames.length)];
    randomData.push(name);
    var robeColor = robeColors[parseInt(Math.random() * robeColors.length)];
    randomData.push(robeColor);
    var eyesColor = eyesColors[parseInt(Math.random() * eyesColors.length)];
    randomData.push(eyesColor);
};

var generateName = function() {
    var name = firstNames[parseInt(Math.random() * firstNames.length)] + ' ' + lastNames[parseInt(Math.random() * lastNames.length)];
    return name;
};

var generateRobeColor = function() {
    var robeColor = robeColors[parseInt(Math.random() * robeColors.length)];
    return robeColor;
};

var generateEyesColor = function() {
    var eyesColor = eyesColors[parseInt(Math.random() * eyesColors.length)];
    return eyesColor;
};

var generateWizard = function () {
    return {
        name: generateName(),
        robeColor: generateRobeColor(),
        eyesColor: generateEyesColor()
    }
};

var renderWizard = function(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.robeColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
};

var renderSimilarsFn = function() {
    var SIMILAR_WIZARDS = 4;
    var fragment = document.createDocumentFragment();

    return function () {
        for (let i = 0; i < SIMILAR_WIZARDS; i++) {
            fragment.appendChild(renderWizard(generateWizard()));
        }
        similarListElement.appendChild(fragment);
    }
};
var renderSimilars = renderSimilarsFn();
renderSimilars();

document.querySelector('.setup-similar').classList.remove('hidden');