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
    'f',
    '3'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let file = gets();
let rank = +gets();

let fA = 'a';
let fB = 'b';
let fC = 'c';
let fD = 'd';
let fE = 'e';
let fF = 'f';
let fG = 'g';
let fH = 'h';


if (rank % 2 !== 0 && (file === fB || file === fD || file === fF || file === fH)) {
    print('light');
} else {
    print('dark');
}




