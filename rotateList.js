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
    '5,3,2,1',
    '2'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let num = gets().split(',').map(Number);
let rotateNum = +gets();

for (let i = 1; i <= rotateNum; i += 1) {
    let firstElement = num.shift();
    num.push(firstElement);
}
print(num.join(','));


