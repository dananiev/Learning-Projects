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
    '10'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let input = gets();
let row = '';

for (let i = 1; i <= input; i += 1) {
    let maxDivider = parseInt(Math.sqrt(i));
    let isPrime = true;

    for (let divider = 2; divider <= maxDivider; divider += 1) {
        if (i % divider === 0) {
            isPrime = false;
        }
    }

    if (isPrime) {
        row += '1';
        print(row);
    } else {
        row += '0';
    }
}