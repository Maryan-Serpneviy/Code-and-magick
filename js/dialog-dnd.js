const setup = document.querySelector('.overlay');
const dialogHandler = setup.querySelector('input[type=file]');

dialogHandler.addEventListener('mousedown', evt => {
    evt.preventDefault();

    let dragged = false;

    let startCoords = {
        x: evt.clientX,
        y: evt.clientY
    };

    const onMouseMove = moveEvt => {
        moveEvt.preventDefault();
        dragged = true;

        const shift = {
            x: startCoords.x - moveEvt.clientX,
            y: startCoords.y - moveEvt.clientY
        };

        startCoords = {
            x: moveEvt.clientX,
            y: moveEvt.clientY
        };

        setup.style.top = `${setup.offsetTop - shift.y}px`;
        setup.style.left = `${setup.offsetLeft - shift.x}px`;
    };

    const onMouseUp = upEvt => {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
            
        if (dragged) {
            const onClickPreventDefault = evt => {
                evt.preventDefault();
                dialogHandler.removeEventListener('click', onClickPreventDefault);
            };
            dialogHandler.addEventListener('click', onClickPreventDefault);
        }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});