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
    '2',
    '50',
    '40'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let numbers = +gets();

for (let i = 0; i <= numbers - 1; i += 1) {
    let currentNumber = +gets();
    let discountPrice = currentNumber * 0.35;
    print(discountPrice.toFixed(2));
}



