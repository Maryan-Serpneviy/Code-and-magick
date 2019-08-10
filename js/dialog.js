'use strict';

(function () {
    window.setup = document.querySelector('.overlay');
    var setupOpen = document.querySelector('.setup-open');
    var setupClose = setup.querySelector('.setup-close');

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
})();