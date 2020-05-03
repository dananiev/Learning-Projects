'use strict';

const getGets = (arr) => {
    let index = 0;

    return() => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [
    '3,-12,0,0,13,5,1,0,-2'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let numbers = gets().split(',').map(Number);
let above = [];
let below = [];
let zeroes = [];

for (let i = 0; i < numbers.length; i += 1) {
    let currentNumber = numbers[i];

    if (currentNumber < 0) {
        below.push(currentNumber);
    } 

    if (currentNumber === 0) {
        zeroes.push(currentNumber);
    }

    if (currentNumber > 0) {
        above.push(currentNumber)
    }
}
print([].concat(below, zeroes, above).toString());
