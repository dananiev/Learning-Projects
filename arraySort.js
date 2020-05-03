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
    '0 1 0 3 12'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;


let input = gets().split(',');

let nonZeroes = [];
let zeroes = [];

for (const current of input) {
    if (current === '0') {
        zeroes.push(current);
    } else {
        nonZeroes.push(current);
    }
}

let result = nonZeroes.concat(zeroes);

print(result.join(','));