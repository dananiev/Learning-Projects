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
    '100'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let number = +gets();

let result = findPrimeFactors(number);

function findPrimeFactors (num) {

    let primeFactors = [];
    while (num % 2 === 0) {
        primeFactors.push(2);
        num = num / 2;
    }

    let sqrtNum = Math.sqrt(num);
    for (let i = 3; i <= sqrtNum; i++) {
        while (num % i === 0) {
            primeFactors.push(i);
            num = num / i;
        }
    }

    if (num > 2) {
        primeFactors.push(num);
    }
    return primeFactors;
}

for (let j = 0; j <= result.length - 1; j += 1) {
    print(result[j]);
}