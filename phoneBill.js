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
    '31',
    '115'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let mess = +gets();
let min = +gets();

let freeMess = 20;
let freeMin = 60;

let addMess = 0;
let addMin = 0;

let addMessTax = 0;
let addMinTax = 0;

let messTax = 0.06;
let minTax = 0.10;

let salesTax = 20;
let salesTaxMess = 0;
let salesTaxMin = 0;

let regularBill = 12;
let totalBill = 0;

let addTaxes = 0;

if (mess > freeMess) {
    addMess = mess - freeMess;
} 

if (addMess > 0) {
    addMessTax = addMess * messTax;
} 
print(addMess + ' additional messages for ' + addMessTax.toFixed(2) + ' levas');

if (min > freeMin) {
    addMin = min - freeMin;
} 

if (addMin > 0) {
    addMinTax = addMin * minTax;
} 
print(addMin + ' additional minutes for ' + addMinTax.toFixed(2) + ' levas');

if (addMessTax > 0) {
    salesTaxMess = addMessTax * salesTax / 100;
} 

if (addMinTax > 0) {
    salesTaxMin = addMinTax * salesTax / 100;
} 

if (salesTaxMess > 0 || salesTaxMin > 0) {
    addTaxes = salesTaxMess + salesTaxMin;
}
print(addTaxes.toFixed(2) + ' additional taxes');

if (mess > freeMess || min > freeMin) {
    totalBill = regularBill + addMinTax + addMessTax + salesTaxMess + salesTaxMin;
    print(totalBill.toFixed(2) + ' total bill');
} else {
    print(regularBill.toFixed(2) + ' total bill');
}



