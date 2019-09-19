export default {
    getMaxElement (arr) {
        if (arr.length > 0) {
            let maxElement = arr[0];
            for (let i = 0; i < arr.length; i++) {
                if (arr[i] > maxElement) {
                    maxElement = arr[i];
                }
            }
            return maxElement;
        }
        return null;
    },
    getRandomArrayElements (arr, count) {
        let shuffled = arr.slice(0), i = arr.length, min = i - count, temp, index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
    },
    debounce: (() => {
        let lastTimeout = null;
        return (cb, ms) => {
            clearTimeout(lastTimeout);
            lastTimeout = setTimeout(() => {
                cb()
            }, ms)
        }
    })()
};