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
    '0 15 30'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let numbers = gets().split(' ').map(Number);

for (let i = 0; i < numbers.length; i += 1) {
    let currentNumber = numbers[i];
    let fahrenheit = currentNumber * 1.8 +32;
    print(Math.round(fahrenheit));
}


// let numbers = gets().split(' ').map((shpekSalam) => {
//     if (!isNaN(shpekSalam) && shpekSalam !== '') {
//         return +shpekSalam;
//     }
// });

// numbers.forEach(number => {
//     let fahrenheit = number * 1.8 + 32;
//     print(fahrenheit);
// });

// numbers.forEach(function (shpekSalam, index) {
//     if (!isNaN(shpekSalam) && shpekSalam !== '') {
//         let fahrenheit = shpekSalam * 1.8 + 32;
//         print(`hhhh ${} ggggg`);
//     }
// });


//T(°F) = T(°C) × 1.8 + 32