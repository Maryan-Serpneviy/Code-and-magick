import Const from './constants.js';
import Wizard from './wizard.js';

const wizardRobe = document.querySelector('.setup-wizard .wizard-coat');
const wizardEyes = document.querySelector('.setup-wizard .wizard-eyes');
const fireball = document.querySelector('.setup-fireball-wrap');
const wizardName = document.querySelector('.setup-user-name');

export const Marijuan = new Wizard({ name: 'Marijuan', robeColor: null, eyesColor: null, fireballColor: null, artifacts: null });

wizardRobe.addEventListener('click', () => {
    wizardRobe.style.fill = Marijuan.changeRobeColor();
});
wizardEyes.addEventListener('click', () => {
    wizardEyes.style.fill = Marijuan.changeEyesColor();
});
fireball.addEventListener('click', () => {
    fireball.style.backgroundColor = Marijuan.changeFireballColor();
});

const similars = document.querySelector('.setup-similar-list');
let similar = null;
similars.addEventListener('click', function(evt) {
    if (similar) {
        similar.style.background = '#414342';
    }
    const target = evt.target.parentNode;
    const Class = {
        item: 'setup-similar-item',
        content: 'setup-similar-content',
        wizard: 'wizard'
    };
    for (let key in Class) {
        if (target.classList.contains(Class[key])) {
            if (target.classList.contains(Class.item)) {
                similar = target.childNodes[1];
            } else if (target.classList.contains(Class.content)) {
                similar = target;
            } else {
                similar = target.parentNode.parentNode;
            }
        }
    }
    similar.style = `background: ${Const.COLOR.WARNING}; transition: all 0.25s ease;`;
    const similarName = similar.parentNode.querySelector('.setup-similar-label').textContent;
    const similarRobe = similar.children[0].children[0].children[0].style.fill;
    const similarEyes = similar.children[0].children[0].children[2].style.fill;
    wizardName.value = similarName;
    wizardRobe.style.fill = similarRobe;
    wizardEyes.style.fill = similarEyes;
});
