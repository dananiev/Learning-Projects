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
    '5',
    'telerik',
    'alpha',
    'java',
    'Spring',
    'nodeJS'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let numOfWords = +gets();
let words = [];
let curWord;
let alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
let maxWeight = 0;
let maxWord = null;


for (let i = 1; i <= numOfWords; i += 1) {
    let currentWord = gets();
    words.push(currentWord);
}

for (let k = 0; k < words.length; k += 1) {
    curWord = words[k].toLowerCase().split('');
    let sum = 0;

    for (let j = 0; j < curWord.length; j += 1) {
        let currentWeight = alphabet.indexOf(curWord[j])+1;
        sum += currentWeight;
    }

    if (sum > maxWeight) {
        maxWeight = sum;
        maxWord = words[k];
    }
}
print(maxWeight + ' ' + maxWord);

