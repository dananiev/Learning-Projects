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
    '3'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let input = gets().replace('.', '').replace('-', '');

while (input.length > 1) {
    let currentSum = 0;

    //for (let i = 0; i > input.length; i += 1) {
     //   let currentDigit = input[i];

     //   if (currentDigit == '-' || currentDigit == '.')
     //   currentSum += +input[i];
    //}

// gornoto i dolnoto sa ednakvi, izpolzvame edno ot dvete

    input.split('').map(Number).forEach(digit => {
        currentSum += digit;
    });

    input = currentSum.toString();
}

print(input);