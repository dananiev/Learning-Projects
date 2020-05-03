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
    '6',
    '9',
    '11',
    '3',
    '2',
    '1',
    '8'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let number = +gets();
let array = [];
let maxNum = null;

for (let i = 0; i < number; i += 1) {
    array.push(+gets());
}

// array.sort(function (a, b){
//     return b - a;
// });
// print(array[0] + ', ' + array[1] + ' and ' + array[2]);

let maxNumbers = [];

for (let i = 0; i < 3; i += 1) {
    let maxNumber;
    let maxIndex;
    for (let j = 0; j <= array.length - 1; j += 1) {
        if (j === 0) {
            maxNumber = array[j];
            maxIndex = j;
        } else if (array[j] > maxNumber) {
            maxNumber = array[j];
            maxIndex = j;
        }
    }
    
    maxNumbers.push(maxNumber);
    array.splice(maxIndex, 1);
}
print(maxNumbers);
