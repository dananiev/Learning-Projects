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
    '2,3,1',
    '5,2,3'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let list1 = gets().split(',').map(Number);
let list2 = gets().split(',').map(Number);
let newList = [];

for (let i = 0; i < list1.length; i += 1) {
    let currentNumber1 = list1[i];
    newList.push(currentNumber1);

    let currentNumber2 = list2[i];
    newList.push(currentNumber2);
}
print(newList.toString());