import Const from './constants.js';

export const Wizard = function(data) {
    this.name = data.name;
    this.robeColor = data.colorCoat;
    this.eyesColor = data.colorEyes;
    this.fireballColor = data.colorFireball;
    this.artifacts = data.artifacts;
};

Wizard.prototype = {
    counter: 0,
    setName(name) {
        if (!name) {
            throw new Error('Name is not specified');
        }
        if (name.length > 30) {
            throw new Error(`Invalid wizard's name value ${name}`);
        }
        this.name = name;
        this.onChange(this);
        return name;
    },
    getName() {
        return this.name;
    },
    changeRobeColor() {
        this.counter === Const.COLOR.ROBE.length - 1 ? this.counter = 0 : this.counter++;
        this.robeColor = Const.COLOR.ROBE[this.counter];
        this.onChange(this);
        return Const.COLOR.ROBE[this.counter];
    },
    changeEyesColor() {
        this.counter === Const.COLOR.EYES.length - 1 ? this.counter = 0 : this.counter++;
        this.eyesColor = Const.COLOR.EYES[this.counter];
        this.onChange(this);
        return Const.COLOR.EYES[this.counter];
    },
    changeFireballColor() {
        this.counter === Const.COLOR.FIREBALL.length - 1 ? this.counter = 0 : this.counter++;
        this.fireballColor = Const.COLOR.FIREBALL[this.counter];
        this.onChange(this);
        return Const.COLOR.FIREBALL[this.counter];
    },
    onChange(wizard) {
        return wizard;
    }
};