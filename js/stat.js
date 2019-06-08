'use strict';

var CX1 = 200;
var CX2 = 350;
var CX3 = 500;
var CY = 150;
var CR = 135;
var GAP = 10;
var FONT_GAP = 15;
var TEXT_WIDTH = 50;

var BAR_HEIGHT = 150 - 10;
var BAR_WIDTH = 50;
var BAR_X = 160;
var BAR_Y = 80 + 10;
var BAR_GAP = 110;
var NAME_X = 160;
var NAME_Y = 250;
var NAME_GAP = BAR_GAP;

var renderCloud = function (ctx, x1, x2, x3, y, r, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(x1, y, r, 0, 2 * Math.PI);
    ctx.arc(x2, y, r, 0, 2 * Math.PI);
    ctx.arc(x3, y, r, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    //ctx.stroke();
};

var getMaxElement = function (arr) {

    if (arr.length > 0) {
        var maxElement = arr[0];
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] > maxElement) {
                maxElement = arr[i];
            }
        }
        return maxElement;
    }
    return null;
}

window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, CX1 + GAP, CX2 + GAP, CX3 + GAP, CY + GAP, CR, 'rgba(0, 0, 0, 0.3)');
    renderCloud(ctx, CX1, CX2, CX3, CY, CR, 'white');

    ctx.fillStyle = '#000';

    var maxTime = getMaxElement(times);


    for (var i = 0; i < players.length; i++) {
        var formula = BAR_HEIGHT * times[i] / maxTime;
        ctx.fillText(players[i], NAME_X + NAME_GAP * i, NAME_Y);
        ctx.fillRect(BAR_X + BAR_GAP * i, BAR_Y + (BAR_HEIGHT - formula), BAR_WIDTH, formula);
    }
    /*
    ctx.fillText(playerName, NAME_X + NAME_GAP * playerIndex, NAME_Y);
    ctx.fillRect(BAR_X + BAR_GAP * playerIndex, BAR_Y, BAR_WIDTH, BAR_HEIGHT);

    playerIndex = 1;
    playerName = 'Kaye';

    ctx.fillText(playerName, NAME_X + NAME_GAP * playerIndex, NAME_Y);
    ctx.fillRect(BAR_X + BAR_GAP * playerIndex, BAR_Y, BAR_WIDTH, BAR_HEIGHT);

    playerIndex = 2;
    playerName = 'Ben';

    ctx.fillText(playerName, NAME_X + NAME_GAP * playerIndex, NAME_Y);
    ctx.fillRect(BAR_X + BAR_GAP * playerIndex, BAR_Y, BAR_WIDTH, BAR_HEIGHT);

    playerIndex = 3;
    playerName = 'John';

    ctx.fillText(playerName, NAME_X + NAME_GAP * playerIndex, NAME_Y);
    ctx.fillRect(BAR_X + BAR_GAP * playerIndex, BAR_Y, BAR_WIDTH, BAR_HEIGHT);
    */

};
