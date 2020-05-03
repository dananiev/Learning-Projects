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
    'June',
    '24'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let month = gets();
let date = +gets();

let m1 = 'January';
let m2 = 'February';
let m3 = 'March';
let m4 = 'April';
let m5 = 'May';
let m6 = 'June';
let m7 = 'July';
let m8 = 'August';
let m9 = 'September';
let m10 = 'October';
let m11 = 'November';
let m12 = 'December';

if (month === m1 || month === m2) {
    print('Winter');
} else if (month === m4 || month === m5) {
    print('Spring');
} else if (month === m7 || month === m8) {
    print('Summer');
} else if (month === m10 || month === m11) {
    print('Autumn');
} else if (month === m3 && date < 20) {
    print('Winter');
} else if (month === m3 && date >= 20) {
    print('Spirng');
} else if (month === m6 && date < 21) {
    print('Spring');
} else if (month === m6 && date >= 21) {
    print('Summer');
} else if (month === m9 && date < 22) {
    print('Summer');
} else if (month === m9 && date >= 22) {
    print('Autumn');
} else if (month === m12 && date < 21) {
    print('Autumn');
} else if (month === m12 && date >= 21) {
    print('Winter');
}



