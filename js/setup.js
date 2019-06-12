'use strict';

const SIMILAR_WIZARDS = 4;

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

var firstNames = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];

var lastNames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var robeColors = ['hsl(140, 100%, 70%)', 'hsl(0, 100%, 65%)', 'hsl(0, 0%, 65%)', 'hsl(60, 20%, 50%)', 'hsl(80, 100%, 30%)', 'hsl(60, 100%, 80%)', 'hsl(180, 100%, 20%)', 'hsl(40, 100%, 30%)', 'hsl(240, 20%, 50%)', 'hsl(0, 50%, 40%)', 'hsl(210, 100%, 40%)', 'rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var eyesColors = ['hsl(225, 100%, 60%)', 'hsl(120, 60%, 50%)', 'hsl(40, 100%, 15%)', 'hsl(180, 20%, 50%)', 'hsl(30, 100%, 5%)', 'hsl(0, 100%, 40%)', 'hsl(48, 100%, 50%)'];

function generateRandomData(firstNames, lastNames, robeColors, eyesColors) {
    var randomData = [];
    var name = firstNames[parseInt(Math.random() * firstNames.length)] + ' ' + lastNames[parseInt(Math.random() * lastNames.length)];
    randomData.push(name);
    var robeColor = robeColors[parseInt(Math.random() * robeColors.length)];
    randomData.push(robeColor);
    var eyesColor = eyesColors[parseInt(Math.random() * eyesColors.length)];
    randomData.push(eyesColor);
}


// create object using constructor
function generateWizard() {
    var data = generateRandomData(firstNames, lastNames, robeColors, eyesColors);
    var wizard = new Wizard(data[0], data[1], data[2]);
}

function generateName() {
    var name = firstNames[parseInt(Math.random() * firstNames.length)] + ' ' + lastNames[parseInt(Math.random() * lastNames.length)];
    return name;
}

function generateRobeColor() {
    var robeColor = robeColors[parseInt(Math.random() * robeColors.length)];
    return robeColor;
}

function generateEyesColor() {
    var eyesColor = eyesColors[parseInt(Math.random() * eyesColors.length)];
    return eyesColor;
}

function Wizard(name, robeColor, eyesColor) {
    this.name = name;
    this.robeColor = robeColor;
    this.eyesColor = eyesColor;
}

function generateWizard() {
    return {
        name: generateName(),
        robeColor: generateRobeColor(),
        eyesColor: generateEyesColor()
    }
}

function renderWizard(wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.robeColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
}

function renderSimilars() {
    var fragment = document.createDocumentFragment();
    for (let i = 0; i < SIMILAR_WIZARDS; i++) {
        fragment.appendChild(renderWizard(generateWizard()));
    }
    similarListElement.appendChild(fragment);
}
renderSimilars();
