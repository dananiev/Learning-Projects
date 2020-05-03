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
    '1,2,3,3,5'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let input = gets().split(',').map(Number);
let missingNumbers = [];

for (let i = 1; i <= input.length; i += 1) {
    let currentNumber = i;
    let isMissing = input.indexOf(currentNumber);

    if (isMissing === -1) {
        missingNumbers.push(currentNumber);
    }
}
print(missingNumbers.join(','));