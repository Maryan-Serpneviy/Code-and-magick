'use strict';

(function() {
    const shopElement = document.querySelector('.setup-artifacts-shop');
    let draggedItem = null;
    shopElement.addEventListener ('dragstart', evt => {
        if (evt.target.tagName.toLowerCase() === 'img') {
        draggedItem = evt.target;
        evt.dataTransfer.setData ('text', evt.target.alt);
        }
        return false;
    });

    const artifactsElement = document.querySelector('.setup-artifacts');
    artifactsElement.addEventListener ('drop', evt => {
        evt.target.style.backgroundColor = '';
        evt.target.appendChild(draggedItem);
        return false;
    });
    artifactsElement.addEventListener ('dragenter', evt => {
        evt.target.style.backgroundColor = 'yellow';
        evt.preventDefault();
    });
    artifactsElement.addEventListener ('dragover', evt => {
        evt.preventDefault();
        return false;
    });
    artifactsElement.addEventListener ('dragleave', evt => {
        evt.target.style.backgroundColor = '';
        evt.preventDefault();
    });
})();