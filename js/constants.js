export default {
    SIMILARS: 4,
    MIN_NAME_LENGTH: 5,
    API: {
        LOAD: 'https://js.dump.academy/code-and-magick/data',
        SAVE: 'https://js.dump.academy/code-and-magick'
    },
    TIMEOUT: {
        XHR: 10000,
        RELOAD: 5000,
        SUCCESS: 2000,
        DEBOUNCE: 0.65
    },
    EFFECT: {
        VANISH: 'transform: scale(0); transition: all 0.3s ease'
    },
    COLOR: {
        ROBE: ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'],
        EYES: ['black', 'red', 'blue', 'yellow', 'green'],
        FIREBALL: ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'],
        SUCCESS: '#28a745',
        WARNING: '#ffc107',
        DANGER: '#dc3545'
    }
};