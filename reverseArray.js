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
    '1 2 3 4 5 6 7'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let arr = gets().split(' ').map(Number);
let reversedArr = [];

for (let i = arr.length - 1; i >= 0; i -= 1) {
    reversedArr.push(arr[i]);
}
print(reversedArr.join(', '));