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
    '15'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let number = +gets();
let arr = [];

for (let i = 1; i <= number; i += 1) {
    let flag = true;

    for (let j = 2; j <= i - 1; j += 1) {
        if (i % j === 0) {
            flag = false;
            break;
        }
    }
    if (flag === true) {
        arr.push(i);
    }
}
print(arr.join(' '));