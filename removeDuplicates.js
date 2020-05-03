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
    '1,2,2,2,2,18,3,12'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let array = gets().split(',');
let arrayWithoutDuplicates = [];

for (let i = 0; i < array.length; i += 1) {
    let currentNumber = array[i];
    let numberExists = arrayWithoutDuplicates.includes(currentNumber);

    if (!numberExists) {
        arrayWithoutDuplicates.push(currentNumber);
    }
}
print(arrayWithoutDuplicates);

