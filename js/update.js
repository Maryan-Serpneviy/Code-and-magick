import Const from './constants.js';
import render from './render.js';
import { wizards } from './similars.js';
import { CurrentColor } from './colorize.js';

const userDialog = document.querySelector('.overlay');
const similarListElement = userDialog.querySelector('.setup-similar-list');

const getRank = wizard => {
    let rank = 0;
    if (wizard.colorCoat === CurrentColor.ROBE) {
        rank += 2;
    }
    if (wizard.colorEyes === CurrentColor.EYES) {
        rank += 1;
    }
    if (wizard.colorFireball === CurrentColor.FIREBALL) {
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
    wizards.sort ((left, right) => {
        let rankDiff = getRank(right) - getRank(left);
        if (rankDiff === 0) {
            rankDiff = namesComparator(left.name, right.name);
        }
        return rankDiff;
    });
    const fragment = document.createDocumentFragment();
    for (let i = 0; i < Const.SIMILARS; i++) {
        fragment.appendChild(render(wizards[i]));
    }
    similarListElement.appendChild(fragment);
};

export { updateSimilars };