'use strict';

const getGets = (arr) => {
    let index = 0;

    return() => {
        const toReturn = arr[index];
        index += 1;
        return toReturn;
    };
};

const test = [];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let number = 12345;
print(Math.sqrt(number));