function sum(a, b) {
    return a + b;
}
//console.log(sum(4, 5));

let sumOne = (c, d) => c + d;
//console.log(sumOne(3, 2));

let isPositive = number => number >= 0;
//console.log(isPositive(2));

let isString = string => string.length >= 5;
//console.log(isString('Ivan'));

let randomNumber = () => Math.random;
//console.log(randomNumber);


class Person {
    constructor(name) {
        this.name = name;
    }

    printNameArrow() {
        setTimeout(() => {
            console.log('Arrow: ' + this.name);
        }, 100)
    }

    printNameFunction() {
        setTimeout(function() {
            console.log('Function: ' + this.name);
        }, 100)
    }
}

let person = new Person('Ivan');
person.printNameArrow();
person.printNameFunction();