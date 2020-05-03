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
    '2.5',
    '1.25',
    '3'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let numbers = +gets();
let sum = 0;

for (let i = 0; i <= numbers - 1; i += 1) {
    sum += +gets();
}
print((sum / numbers).toFixed(2));


