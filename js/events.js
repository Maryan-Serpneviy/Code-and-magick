'use strict';

var setup = document.querySelector('.overlay');
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');


var openSetup = function () {
    setup.classList.remove('hidden');
}

var closeSetup = function () {
    setup.classList.add('hidden');
}

setupOpen.addEventListener('click', openSetup);
setupClose.addEventListener('click', closeSetup);
