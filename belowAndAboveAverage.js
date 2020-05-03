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
    '0,1,-1'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let numbers = gets().split(',').map(Number);
let sum = 0;
let below = [];
let above = [];

for (let i = 0; i <= numbers.length - 1; i += 1) {
    let currentNumber = numbers[i];
    sum += currentNumber;
}
let average = sum / numbers.length;
print('avg: ' + average.toFixed(2));

for (let j = 0; j < numbers.length; j += 1) {
    let currentNum = numbers[j];

    if (currentNum < average) {
        below.push(currentNum);
    } 
}
print('below: ' + below);

for (let k = 0; k < numbers.length; k += 1) {
    let currentNum = numbers[k];

    if (currentNum > average) {
        above.push(currentNum);
    }
}
print('above: ' + above);