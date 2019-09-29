const setup = document.querySelector('.overlay');
const setupOpen = document.querySelector('.setup-open');
const setupClose = setup.querySelector('.setup-close');

const onPopupEscPress = evt => {
    if (evt.key === 'Escape') {
        closePopup();
    }
};

const onAvatarEntPress = evt => {
    if (evt.key === 'Enter') {
        openPopup();
    }
};

const onCrossEntPress = evt => {
    if (evt.key === 'Enter') {
        closePopup();
    }
};

function openPopup() {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
}

function closePopup() {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
}

setupOpen.addEventListener('click', openPopup);
setupOpen.addEventListener('keydown', onAvatarEntPress);
setupClose.addEventListener('click', closePopup);
setupClose.addEventListener('keydown', onCrossEntPress);