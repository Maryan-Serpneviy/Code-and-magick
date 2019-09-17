import utils from './utils.js';

const CX1 = 200;
const CX2 = 350;
const CX3 = 500;
const CY = 150;
const CR = 135;
const GAP = 10;
const BAR_HEIGHT = 150 - 10;
const BAR_WIDTH = 50; // 40
const BAR_X = 160;
const BAR_Y = 80 + 10;
const BAR_GAP = 110;
const NAME_X = 160;
const NAME_Y = 250;
const NAME_GAP = BAR_GAP;
const STAT_X = NAME_X + 5;
const STAT_Y = 80;
const COLOR_MAX = 255;
const renderCloud = (ctx, x1, x2, x3, y, r, color) => {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc (x1, y, r, 0, 2 * Math.PI);
    ctx.arc (x2, y, r, 0, 2 * Math.PI);
    ctx.arc (x3, y, r, 0, 2 * Math.PI);
    ctx.closePath();
    ctx.fill();
    //ctx.stroke();
};

const renderStatistics = (ctx, players, times) => {
    renderCloud (ctx, CX1 + GAP, CX2 + GAP, CX3 + GAP, CY + GAP, CR, 'rgba(0, 0, 0, 0.3)');
    renderCloud (ctx, CX1, CX2, CX3, CY, CR, 'white');
    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText ('Congratulations, you won!', 175, 55);
    ctx.fillText ('Results:', 450, 55);
    const maxTime = Math.floor (utils.getMaxElement(times));
    let winCoef;
    for (let i = 0; i < players.length; i++) {
        // different saturations of blue for other players
        const sat = parseInt (Math.random() * 100);
        const colorSat = `hsl(240, ${sat}%, 50%)`;
        // your color consists of blue and random red
        const randomR = parseInt (Math.random() * COLOR_MAX);
        // the more points player has the more "pink" bar becomes
        winCoef = times[i] / maxTime; 
        const colorRB = `rgb(${Math.floor (COLOR_MAX * winCoef)}, 0, 255, 1)`;
        // bars heights and gaps calculating
        const formula = BAR_HEIGHT * times[i] / maxTime;
        ctx.fillStyle = '#000';
        ctx.fillText (Math.floor(times[i]), STAT_X + NAME_GAP * i, STAT_Y + (BAR_HEIGHT - formula));
        ctx.fillText (players[i], NAME_X + NAME_GAP * i, NAME_Y);
        // your color is red, other players' color is constiable
        if (players[i] === 'Вы') {
            ctx.fillStyle = 'rgba(255, 0, 0, 1)';
        } else {
            ctx.fillStyle = colorRB;
        }
        ctx.fillRect (BAR_X + BAR_GAP * i, BAR_Y + (BAR_HEIGHT - formula), BAR_WIDTH, formula);
    }
};

export { renderStatistics };