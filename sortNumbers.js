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
    '2, 3, 1, 5, 6'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let num = gets().split(', ').map(Number);
let sortNum = [];
//while dokato v masiva ima elementi
//i vutre v while shte ima for cikul kojto shte namira indeksa na naj malkoto chislo v masiva
//i kato svurshi cikula shte znaem koe e naj malkoto chislo i tova chislo go vzemam i go pushvam v nov masiva.

while (num.length > 0) {
    let maxIndex;
    let maxNumber;

    for (let i = 0; i < num.length; i += 1) {
        let currentNumber = num[i];

        if (i === 0 || currentNumber > maxNumber) {
            maxNumber = currentNumber;
            maxIndex = i;
        }
    }
    sortNum.push(maxNumber);
    num.splice(maxIndex, 1);
}
print(sortNum.join(', '));