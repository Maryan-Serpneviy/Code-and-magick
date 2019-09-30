export default {
    debounce: (() => {
        let lastTimeout = null;
        return (cb, s) => {
            const ms = s * 1000;
            clearTimeout(lastTimeout);
            lastTimeout = setTimeout(() => {
                cb();
            }, ms);
        };
    })(),
    svg2base64: svg => {
        const DATA_URI_PREFIX = 'data:image/svg+xml;charset=utf-8;base64,';
        const xml = new XMLSerializer().serializeToString(svg); // convert element to text
        const svg64 = window.btoa(xml); // encode element in base64 form
        return `${DATA_URI_PREFIX}${svg64}`; // add heading
    }
};

Array.prototype.getMaxElement = function() {
    if (this.length > 0) {
        var maxElement = this[0];
        for (var i = 0; i < this.length; i++) {
            if (this[i] > maxElement) {
                maxElement = this[i];
            }
        }
        return maxElement;
    }
    return null;
};

Array.prototype.getRandomElements = function(amount) {
    var shuffled = this.slice(0), i = this.length, min = i - amount, temp, index;
    while (i-- > min) {
        index = Math.floor((i + 1) * Math.random());
        temp = shuffled[index];
        shuffled[index] = shuffled[i];
        shuffled[i] = temp;
    }
    return shuffled.slice(min);
};