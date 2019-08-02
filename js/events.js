'use strict';

var ROBE_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
];
var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
];
var MIN_NAME_LENGTH = 5;
var setup = document.querySelector('.overlay');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

Object.defineProperty(
    Object.prototype,
    'randomElement', {
        value: function () {
            var rand = Math.floor(Math.random() * this.length);
            return this[rand];
        }
    }
);

var onPopupEscPress = function(evt) {
    if (evt.key === 'Escape') {
        closePopup();
    }
};

var onAvatarEntPress = function(evt) {
    if (evt.key === 'Enter') {
        openPopup();
    }
};

var onCrossEntPress = function (evt) {
    if (evt.key === 'Enter') {
        closePopup();
    }
};

var openPopup = function() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', openPopup);
setupOpen.addEventListener('keydown', onAvatarEntPress);
setupClose.addEventListener('click', closePopup);
setupClose.addEventListener('keydown', onCrossEntPress);

// CHARACTER CUSTOMIZING
let wizardRobe = document.querySelector('.setup-wizard .wizard-coat');
let wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
let fireball = document.querySelector('.setup-fireball-wrap');

var changeRobeColorClosure = function() {
    var count = 0
    return function() {
        wizardRobe.style.fill = robeColors[count];
        count == eyesColors.length - 1 ? count = 0 : count++;
    }
};
var changeRobeColor = changeRobeColorClosure();

var changeEyesColorClosure = function() {
    var count = 0;
    return function() {
        wizardEyes.style.fill = eyesColors[count];
        count == eyesColors.length - 1 ? count = 0 : count++;
    }
};
var changeEyesColor = changeEyesColorClosure();

var changeFireballColorClosure = function() {
    var count = 0;
    return function() {
        fireball.style.backgroundColor = FIREBALL_COLORS[count];
        count == FIREBALL_COLORS.length - 1 ? count = 0 : count++;
    }
};
var changeFireballColor = changeFireballColorClosure();

wizardRobe.addEventListener('click', changeRobeColor);

wizardEyes.addEventListener('click', changeEyesColor);

fireball.addEventListener('click', changeFireballColor);

// VALIDATION
var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function() {
    if (userNameInput.validity.tooShort) {
        userNameInput.setCustomValidity('Name must be at least 5 characters long');
    } else if (userNameInput.validity.tooLong) {
        userNameInput.setCustomValidity('Name must not exceed 25 characters');
    } else if (userNameInput.validity.valueMissing) {
        userNameInput.setCustomValidity('Type the name of your character');
    } else {
        userNameInput.setCustomValidity('');
    }
});

userNameInput.addEventListener('input', function(evt) {
    var target = evt.target;
    target.value.length < MIN_NAME_LENGTH ?
    target.setCustomValidity('Name must be at least 2 characters long') : 
    target.setCustomValidity('');
});