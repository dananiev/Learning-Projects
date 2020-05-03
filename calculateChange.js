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
    '0.76',
    '1'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let price = +gets();
let paid = +gets();

let change = paid - price;

let one = 0;
let two = 0;
let five = 0;
let ten = 0;
let twenty = 0;
let fifty = 0;
let oneHundred = 0;

while (change.toFixed(2) >= 1) {
    oneHundred += 1;
    change -= 1;
}

if (change.toFixed(2) >= 0.50) {
    fifty += 1;
    change -= 0.50;
}

while (change.toFixed(2) >= 0.20) {
    twenty += 1;
    change -= 0.20;
}

if (change.toFixed(2) >= 0.10) {
    ten += 1;
    change -= 0.10;
}

if (change.toFixed(2) >= 0.05) {
    five += 1;
    change -= 0.05;
}

while (change.toFixed(2) >= 0.02) {
    two += 1;
    change -= 0.02;
}

if (change.toFixed(2) >= 0.01) {
    one += 1;
    change -= 0.01;
}


if (oneHundred > 0) {
    print(oneHundred + ' x 1 lev');
} 

if (fifty > 0) {
    print(fifty + ' x 50 stotinki');
} 

if (twenty > 0) {
    print(twenty + ' x 20 stotinki');
} 

if (ten > 0) {
    print(ten + ' x 10 stotinki');
} 

if (five > 0) {
    print(five + ' x 5 stotinki');
} 

if (two > 0) {
    print(two + ' x 2 stotinki');
} 

if (one > 0) {
    print(one + ' x 1 stotinka');
}



