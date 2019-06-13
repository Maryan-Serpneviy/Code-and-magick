'use strict';

const ESC_KEYCODE = 27;
const ENTER_KEYCODE = 13;

var setup = document.querySelector('.overlay');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');

var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
        closePopup();
    }
}

var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
}

var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress)
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
