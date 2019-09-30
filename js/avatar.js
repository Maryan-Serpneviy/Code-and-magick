import Const from './constants.js';
import AJAX from './ajax.js';

const fileChooser = document.querySelector('.upload input[type=file]');
const setupAvatar = document.querySelector('.setup-user-pic');
const pageAvatar = document.querySelector('.setup-open-icon');

fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();
    const matches = Const.IMAGE_FORMATS.some(it => fileName.endsWith(it));

    if (matches) {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            setupAvatar.src = reader.result;
            pageAvatar.src = reader.result;
        });
        reader.readAsDataURL(file);
        return;
    }
    AJAX.statusHandler('Error! Wrong file type');
});