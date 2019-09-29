import AJAX from './ajax.js';
import Const from './constants.js';
import render from './render.js';
import { Wizard } from './wizard.js';

const userDialog = document.querySelector('.overlay');
const similarListElement = userDialog.querySelector('.setup-similar-list');
const fragment = document.createDocumentFragment();

let Wizards = [];
const renderSimilars = data => {
    Wizards = data.map(elem => {
        return new Wizard(elem);
    });
    const randomWizards = data.getRandomElements(Const.SIMILARS);
    randomWizards.forEach(elem => {
        fragment.appendChild(render(new Wizard(elem)));
    });
    similarListElement.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

AJAX.load(renderSimilars, AJAX.statusHandler, 'downloaded');

export { Wizards };