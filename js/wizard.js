import Const from './constants.js';

let counter = 0;

export default class Wizard {
    constructor(data) {
        this.name = data.name;
        this.robeColor = data.colorCoat;
        this.eyesColor = data.colorEyes;
        this.fireballColor = data.colorFireball;
        this.artifacts = data.artifacts;
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
        counter === Const.COLOR.ROBE.length - 1 ? counter = 0 : counter++;
        this.robeColor = Const.COLOR.ROBE[counter];
        this.onChange(this);
        return Const.COLOR.ROBE[counter];
    }
    changeEyesColor() {
        counter === Const.COLOR.EYES.length - 1 ? counter = 0 : counter++;
        this.eyesColor = Const.COLOR.EYES[counter];
        this.onChange(this);
        return Const.COLOR.EYES[counter];
    }
    changeFireballColor() {
        counter === Const.COLOR.FIREBALL.length - 1 ? counter = 0 : counter++;
        this.fireballColor = Const.COLOR.FIREBALL[counter];
        this.onChange(this);
        return Const.COLOR.FIREBALL[counter];
    }
    onChange(wizard) {
        return wizard;
    }
}