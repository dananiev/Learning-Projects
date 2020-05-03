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
    '4',
    '5',
    '7',
    '3',
    '6'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let numbers = +gets();
let max = null;

for (let i = 0; i <= numbers - 1; i += 1) {
    let currentNumber = +gets();
    if (i === 0) {
        max = currentNumber;
    } else {
        if (currentNumber > max) {
            max = currentNumber;
        }
    }
}
print(max);





