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
    '13'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let N = +gets();
let biggestPN = 0;

for (let i = N; i < N; i -= 1) {
    
}