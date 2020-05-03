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
    '1 10',
    '5 6'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let num = gets().split(' ').map(Number);
const a = num[0];
const b = num[1];
let counter = 0;

for (let number = a; number <= b; number += 1)  {
    let isGoodNumber = true;
    let x = number;

    while (isGoodNumber && x > 0) {
        let digit = x % 10;
        if (digit != 0 && number % digit != 0) {
            isGoodNumber = false;
        }
        x % 10;
    }

    if (isGoodNumber) {
        counter += 1;
    }

    print(counter);
}







