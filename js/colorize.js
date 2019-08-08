'use strict';

(function() {
    var wizardRobe = document.querySelector('.setup-wizard .wizard-coat');
    var wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
    var fireball = document.querySelector('.setup-fireball-wrap');

    var colorize = function(item, colors) {
        var count = 0;
        return function() {
            count === colors.length - 1 ? count = 0 : count++;

            if (colors === FIREBALL_COLORS) {
                item.style.backgroundColor = colors[count]
            } else {
                item.style.fill = colors[count];
            }
        }
    };
    var changeRobeColor = colorize(wizardRobe, robeColors);
    var changeEyesColor = colorize(wizardEyes, eyesColors);
    var changeFireballColor = colorize(fireball, FIREBALL_COLORS);

    wizardRobe.addEventListener('click', changeRobeColor);
    wizardEyes.addEventListener('click', changeEyesColor);
    fireball.addEventListener('click', changeFireballColor);
})();