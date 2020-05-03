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
    '3',
    '1,2,3,4,5',
    '1,2,8,9,9',
    '1,2,2,3,2'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let number = gets();

while (number > 0) {
    let currentArray = gets().split(',').map(Number);
    number -= 1;
    let isSorted = true;

    for (let i = 0; i < currentArray.length - 1; i += 1) {
        let currentNumber = currentArray[i];

        if (currentNumber > currentArray[i + 1]) {
            isSorted = false;
        } 
    }
    print(isSorted);
} 


