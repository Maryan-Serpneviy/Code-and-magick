import Utils from './utils.js';
import ajax from './ajax.js';
import { renderWizard } from './render.js';
import { CurrentColor } from './colorize.js';

const userDialog = document.querySelector('.overlay');
const similarListElement = userDialog.querySelector('.setup-similar-list');
const SIMILARS = 4;

let wizards = [];

const renderSimilars = data => {
    wizards = data;
    
    const randomWizards = Utils.getRandomArrayElements(data, SIMILARS);
    const fragment = document.createDocumentFragment();
    randomWizards.forEach(elem => {
        fragment.appendChild(renderWizard(elem));
    })
    similarListElement.appendChild(fragment);
    userDialog.querySelector('.setup-similar').classList.remove('hidden');
};

const getRank = wizard => {
    let rank = 0;

    if (wizard.colorCoat === CurrentColor.ROBE) {
        rank += 2;
    }
    if (wizard.colorEyes === CurrentColor.EYES) {
        rank += 1;
    }
    return rank;
};

const namesComparator = (left, right) => {
    if (left > right) {
        return 1;
    } else if (left < right) {
        return -1;
    } else {
        return 0;
    }
};

const updateSimilars = () => {
    similarListElement.innerHTML = ''; // clear similars
    const sameRobeAndEyesWizards = wizards.filter(elem => {
        return CurrentColor.ROBE === elem.colorCoat &&
        CurrentColor.EYES === elem.colorEyes;
    });
    const sameRobeWizards = wizards.filter(elem => CurrentColor.ROBE === elem.colorCoat);
    const sameEyesWizards = wizards.filter(elem => CurrentColor.EYES === elem.colorEyes);
    const updatedSimilars = sameRobeWizards.concat(sameEyesWizards).concat(wizards);
    const uniqueSimilars = updatedSimilars.filter((elem, index) => updatedSimilars.indexOf(elem) === index);
    
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < SIMILARS; i++) {
        fragment.appendChild(renderWizard(uniqueSimilars[i]));
    }
    similarListElement.appendChild(fragment);
};

ajax.load (renderSimilars, ajax.errorHandler);

export { updateSimilars };