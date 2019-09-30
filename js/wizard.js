import Const from './constants.js';

export default class Wizard {
    constructor(data) {
        this.name = data.name;
        this.robeColor = data.colorCoat;
        this.eyesColor = data.colorEyes;
        this.fireballColor = data.colorFireball;
        this.artifacts = data.artifacts;
        this.counter = 0;
    }
    set name(value) {
        if (!value) {
            throw new Error('Name is not specified');
        }
        if (value.length > 30) {
            throw new Error(`Invalid wizard's name value ${value}`);
        }
        this.newName = value;
        this.onChange(this);
    }
    get name() {
        return this.newName;
    }
    changeRobeColor() {
        this.counter === Const.COLOR.ROBE.length - 1 ? this.counter = 0 : this.counter++;
        this.robeColor = Const.COLOR.ROBE[this.counter];
        this.onChange(this);
        return Const.COLOR.ROBE[this.counter];
    }
    changeEyesColor() {
        this.counter === Const.COLOR.EYES.length - 1 ? this.counter = 0 : this.counter++;
        this.eyesColor = Const.COLOR.EYES[this.counter];
        this.onChange(this);
        return Const.COLOR.EYES[this.counter];
    }
    changeFireballColor() {
        this.counter === Const.COLOR.FIREBALL.length - 1 ? this.counter = 0 : this.counter++;
        this.fireballColor = Const.COLOR.FIREBALL[this.counter];
        this.onChange(this);
        return Const.COLOR.FIREBALL[this.counter];
    }
    onChange(wizard) {
        return wizard;
    }
}