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
    '5'
];

const gets = this.gets || getGets(test);
const print = this.print || console.log;

let card = gets();
let arr = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
let index = 0;
let currentCard = arr[index];

while (currentCard !== card) {
    print(currentCard + ' of spades, ' + currentCard + ' of clubs, ' + currentCard + ' of hearts, ' + currentCard + ' of diamonds');
    index += 1;
    currentCard = arr[index];
}

print(card + ' of spades, ' + card + ' of clubs, ' + card + ' of hearts, ' + card + ' of diamonds');



