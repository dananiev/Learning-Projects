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
    '3, 2, 1, 8, 5, 10'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let array = gets().split(', ').map(Number);
let reversedArray = [];
let sortedArray = [];

for (let i = array.length - 1; i >= 0; i -= 1) {
    reversedArray.push(array[i]);
}

while (reversedArray.length > 0) {
    let maxIndex;
    let maxNumber;

    for (let i = 0; i < reversedArray.length; i += 1) {
        let currentNumber = reversedArray[i];

        if (i === 0 || currentNumber > maxNumber) {
            maxNumber = currentNumber;
            maxIndex = i;
        }
    }
    sortedArray.push(maxNumber);
    reversedArray.splice(maxIndex, 1);
}
print(sortedArray);

