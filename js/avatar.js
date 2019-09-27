import Const from './constants.js';

const fileChooser = document.querySelector('.upload input[type=file]');
const avatar = document.querySelector('.setup-user-pic');

fileChooser.addEventListener('change', () => {
    const file = fileChooser.files[0];
    const fileName = file.name.toLowerCase();

    const matches = Const.IMAGE_FORMATS.some(it => fileName.endsWith(it));

    if (matches) {
        const reader = new FileReader();
        reader.addEventListener('load', () => {
            avatar.src = reader.result;
        });
        reader.readAsDataURL(file);
    }
});