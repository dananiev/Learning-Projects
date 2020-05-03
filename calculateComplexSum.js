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
    '2'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let n = +gets();
let x = +gets();
let sum = 1;

for (let i = 1; i <= n; i += 1) {
    let divisible = factorial(i);
    let divider = Math.pow(x, i);
    sum += divisible / divider;
}

print(sum.toFixed(5));

function factorial(n) {
    let index = 1;
    let answer = 1;
    while (index <= n) {
        answer *= index;
        index += 1;
    }
    return answer;
}
