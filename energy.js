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
    '10'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let number = gets();
let output = [];
let sNumber = number.toString();
let len = sNumber.length;
let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i < len; i += 1) {
    output.push(+sNumber.charAt(i));
    let currentNumber = +number[i];
    
    if (currentNumber === 0) {
        sumEven += currentNumber;
    } else if (currentNumber % 2 === 0) {
        sumEven += currentNumber;
    } else {
        sumOdd += currentNumber;
    }
}

if (sumEven > sumOdd) {
    print(sumEven + ' energy drinks');
} else if (sumOdd > sumEven) {
    print(sumOdd + ' cups of coffee');
} else {
    print(sumEven + ' of both');
}







// var number = 12354987,
//     output = [],
//     sNumber = number.toString();

// for (var i = 0, len = sNumber.length; i < len; i += 1) {
//     output.push(+sNumber.charAt(i));
// }

// console.log(output);

