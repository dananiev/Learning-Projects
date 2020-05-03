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
    '1'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let mili = +gets();
let result = 0;

if (mili > 0) {
    result = mili / 0.00062137;
}
print(result.toFixed(0));