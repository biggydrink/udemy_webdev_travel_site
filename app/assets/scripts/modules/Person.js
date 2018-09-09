class Person {
    constructor(name, favoriteColor) {
        this._name = name;
        this._favoriteColor = favoriteColor;
    }

    greet() {
        console.log(`Hello, my name is ${this._name} and my favorite color is ${this._favoriteColor}.`);
    }
}

module.exports = Person;