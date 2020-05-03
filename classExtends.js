"use strict";
class Vehicle {
    constructor(c) {
        this.color = c;
    }

    showColor() {
        return `The car is ${this.color}`;
    }
}

class PassengerCar extends Vehicle {
    constructor(color, m) {
        super(color);
        this.model = m;
    }
    
    details() {
        return `${super.showColor()} and is ${this.model}`;
    }
}

const car = new PassengerCar('red', 'mazda');
console.log(car);