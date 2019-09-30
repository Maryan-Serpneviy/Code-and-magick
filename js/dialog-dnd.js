const setup = document.querySelector('.overlay');
const dialogHandler = setup.querySelector('input[type=file]');

dialogHandler.addEventListener('mousedown', evt => {
    evt.preventDefault();

    let dragged = false;

    const Coordinate = function(x, y) {
        this.x = x;
        this.y = y;
    };

    let startCoords = new Coordinate(evt.clientX, evt.clientY);
    Object.freeze(startCoords);

    const onMouseMove = moveEvt => {
        moveEvt.preventDefault();
        dragged = true;

        const shift = new Coordinate(startCoords.x - moveEvt.clientX, startCoords.y - moveEvt.clientY);
        Object.freeze(shift);

        startCoords = new Coordinate(moveEvt.clientX, moveEvt.clientY);
        Object.freeze(startCoords);

        setup.style.top = `${setup.offsetTop - shift.y}px`;
        setup.style.left = `${setup.offsetLeft - shift.x}px`;
    };

    const onMouseUp = upEvt => {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        if (dragged) {
            const onClickPreventDefault = function(evt) {
                evt.preventDefault();
                this.removeEventListener('click', onClickPreventDefault);
            };
            dialogHandler.addEventListener('click', onClickPreventDefault);
        }
    };
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
});