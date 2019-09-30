import Const from './constants.js';
import Util from './utils.js';
import render from './render.js';
import { Wizards } from './similars.js';
import { Marijuan } from './colorize.js';

const userDialog = document.querySelector('.overlay');
const similarListElement = userDialog.querySelector('.setup-similar-list');

const getRank = wizard => {
    let rank = 0;
    if (wizard.robeColor === Marijuan.robeColor) {
        rank += 2;
    }
    if (wizard.eyesColor === Marijuan.eyesColor) {
        rank += 1;
    }
    if (wizard.fireballColor === Marijuan.fireballColor) {
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

const wizardsComparator = (left, right) => {
    const rankDiff = getRank(right) - getRank(left);
    return rankDiff === 0 ? namesComparator(left.name, right.name) : rankDiff;
};

const updateSimilars = () => {
    similarListElement.innerHTML = ''; // clear similars
    Wizards.sort(wizardsComparator);
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < Const.SIMILARS; i++) {
        fragment.appendChild(render(Wizards[i]));
    }
    similarListElement.appendChild(fragment);
};

Marijuan.onChange = () => {
    Util.debounce(updateSimilars, Const.TIMEOUT.DEBOUNCE);
};