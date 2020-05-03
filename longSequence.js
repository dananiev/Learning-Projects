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


for (let i = 2; i < 1002; i += 1) {
    if (i % 2 == 0) {
        print(i);
    } else {
        print(-i);
    }
}