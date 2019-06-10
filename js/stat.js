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
var BAR_WIDTH = 50; // 40
var BAR_X = 160;
var BAR_Y = 80 + 10;
var BAR_GAP = 110;
var NAME_X = 160;
var NAME_Y = 250;
var NAME_GAP = BAR_GAP;
var STAT_X = NAME_X + 5;
var STAT_Y = 80;

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
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура, вы победили!', 155, 55);
    ctx.fillText('Список результатов:', 360, 55);

    var maxTime = Math.floor(getMaxElement(times));
    var winCoef;
    for (var i = 0; i < players.length; i++) {

        // different saturations of blue for other players
        var sat = parseInt(Math.random() * 100);
        var colorSat = 'hsl(240, ' + sat + '%, 50%)';

        // mixes of blue and random red for you
        var randomR = parseInt(Math.random() * 255);
        winCoef = times[i] / maxTime; // the more points player has the more pink bar is
        var colorRB = 'rgb(' + Math.floor(255 * winCoef) + ', 0, 255, 1)';

        // bars heights and gaps calculating
        var formula = BAR_HEIGHT * times[i] / maxTime;

        ctx.fillStyle = '#000';
        ctx.fillText(Math.floor(times[i]), STAT_X + NAME_GAP * i, STAT_Y + (BAR_HEIGHT - formula));
        ctx.fillText(players[i], NAME_X + NAME_GAP * i, NAME_Y);
        // your color is red, other players' color is variable
        if (players[i] === 'Вы') {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        } else {
            ctx.fillStyle = colorRB;
        }
        ctx.fillRect(BAR_X + BAR_GAP * i, BAR_Y + (BAR_HEIGHT - formula), BAR_WIDTH, formula);
    }
};
