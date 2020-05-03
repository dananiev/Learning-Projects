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
    '3',
    '2',
    '5',
    '1'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let numbers = +gets();
let sum = 0;
let min = null;
let max = null;

for (let i = 0; i <= numbers - 1; i += 1) {
    let currentNumber = +gets();
    sum += currentNumber;
    print(sum);
    if (i === 0) {
        min = currentNumber;
        max = currentNumber;
    } else {
       if (currentNumber < min) {
           min = currentNumber;
       }
       if (currentNumber > max) {
           max = currentNumber;
       }
    }
}
print('min=' + min.toFixed(2));
print('max=' + max.toFixed(2));
print('sum=' + sum.toFixed(2));
print('avg=' + (sum / numbers).toFixed(2));


