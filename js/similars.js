import AJAX from './ajax.js';
import Const from './constants.js';
import Util from './utils.js';
import render from './render.js';

const userDialog = document.querySelector('.overlay');
const similarListElement = userDialog.querySelector('.setup-similar-list');

let wizards = [];

const renderSimilars = data => {
    wizards = data;
    
    const randomWizards = Util.getRandomArrayElements(data, Const.SIMILARS);
    const fragment = document.createDocumentFragment();
    randomWizards.forEach(elem => {
        fragment.appendChild(render(elem));
    })
    similarListElement.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

AJAX.load (renderSimilars, AJAX.errorHandler);

export { wizards };