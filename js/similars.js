import AJAX from './ajax.js';
import Const from './constants.js';
import render from './render.js';

const userDialog = document.querySelector('.overlay');
const similarListElement = userDialog.querySelector('.setup-similar-list');
const fragment = document.createDocumentFragment();

let wizards = [];

const renderSimilars = data => {
    wizards = data;
    const randomWizards = data.getRandomElements(Const.SIMILARS);
    randomWizards.forEach(elem => {
        fragment.appendChild(render(elem));
    })
    similarListElement.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

AJAX.load (renderSimilars, AJAX.statusHandler, 'downloaded');

export { wizards };