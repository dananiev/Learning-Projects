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
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let number = +gets();

for (let i = 1; i <= number; i += 1) {
    let result = '';
    for (let j = 1; j <= number; j += 1) {
       result += (i + j - 1);
    }
    print(result);
}