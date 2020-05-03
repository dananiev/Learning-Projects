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
    '5',
    '4', //- odd 1
    '3', //- even 2
    '2', //- odd 3
    '5', //- even 4
    '2'  //- odd 5
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let number = +gets();
let array = [];
let arrayEven = [];
let arrayOdd = [];
let evenProduct = 1;
let oddProduct = 1;

for (let i = 1; i <= number; i += 1) {
    let currentNumber = +gets();
    let currentIndex = i;
    if (currentIndex % 2 === 0) {
        arrayEven.push(currentNumber);
        evenProduct *= currentNumber;
    } else {
        arrayOdd.push(currentNumber);
        oddProduct *= currentNumber;
    }
}

if (evenProduct === oddProduct) {
    print('yes ' + evenProduct);
} else {
    print('no ' + oddProduct + ' ' + evenProduct);
}





