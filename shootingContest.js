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
    '4',
    '5',
    '1',
    '3',
    '5'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let targets = +gets();
let georgeSpeed = +gets();
let georgeLatency = +gets();
let peterSpeed = +gets();
let peterLatency = +gets();
let georgeSeconds = 0;
let peterSeconds = 0;
let targetSecG = 0;
let targetSecP = 0;

if (targets > 0) {
    targetSecG = targets * georgeSpeed;
    georgeSeconds = targetSecG + (georgeLatency * 2);
}

if (targets > 0) {
    targetSecP = targets * peterSpeed;
    peterSeconds = targetSecP + (peterLatency * 2);
}

if (georgeSeconds > peterSeconds) {
    print('Peter');
} else if (peterSeconds > georgeSeconds) {
    print('George');
} else if (peterSeconds === georgeSeconds) {
    print('Draw');
}


