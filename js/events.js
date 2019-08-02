'use strict';

const ROBE_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
];

const FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
];

const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;

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

var onPopupEscPressFn = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
        closePopup();
    }
}
var onPopupEscPress = onPopupEscPressFn;

var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
}

var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
}

setupOpen.addEventListener('click', function () {
    openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        openPopup();
    }
});

setupClose.addEventListener('click', function () {
    closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
        closePopup();
    }
});

// CHARACTER CUSTOMIZING

let wizardRobe = document.querySelector('.setup-wizard .wizard-coat');
let wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
let fireball = document.querySelector('.setup-fireball-wrap');

function changeRobeColorFn() {
    var COUNT_START = 0
    return function () {
        wizardRobe.style.fill = robeColors[COUNT_START];
        COUNT_START == eyesColors.length - 1 ? COUNT_START = 0 : COUNT_START++;
    }
}
var changeRobeColor = changeRobeColorFn();

function changeEyesColorFn() {
    var COUNT_START = 0;
    return function () {
        wizardEyes.style.fill = eyesColors[COUNT_START];
        COUNT_START == eyesColors.length - 1 ? COUNT_START = 0 : COUNT_START++;
    }
}
var changeEyesColor = changeEyesColorFn();

function changeFireballColorFn() {
    var COUNT_START = 0;
    return function () {
        fireball.style.backgroundColor = FIREBALL_COLORS[COUNT_START + 1];
        COUNT_START == FIREBALL_COLORS.length - 1 ? COUNT_START = 0 : COUNT_START++;
    }
}
var changeFireballColor = changeFireballColorFn();

wizardRobe.addEventListener('click', function () {
    changeRobeColor();
});

wizardEyes.addEventListener('click', function () {
    changeEyesColor();
});

fireball.addEventListener('click', function () {
    changeFireballColor();
});

// VALIDATION

var userNameInput = setup.querySelector('.setup-user-name');

userNameInput.addEventListener('invalid', function (evt) {
    if (userNameInput.validity.tooShort) {
        userNameInput.setCustomValidity('Name must be at least 2 characters long');
    } else if (userNameInput.validity.tooLong) {
        userNameInput.setCustomValidity('Name must not exceed 25 characters');
    } else if (userNameInput.validity.valueMissing) {
        userNameInput.setCustomValidity('Type the name of your character');
    } else {
        userName.setCustomValidity('');
    }
});

userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    target.value.length < 2 ? target.setCustomValidity('Name must be at least 2 characters long') : target.setCustomValidity('');
});
