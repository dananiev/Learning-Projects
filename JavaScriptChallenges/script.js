// // LONGEST WORD
// function longestWord(str) {
//     let words = str.split(' ');
//     let longestWord = '';
//     for (let word of words) {
//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }
// console.log(longestWord("I woke up at seven o'clock in the morning"));



// MATH SEQUENCE
// Arithmetic, Geometric or No pattern
// no negative numbers
// function mathSequences(arr) {
//     let arith = new Set();
//     let geo = new Set();
//     for (let i = 1; i < arr.length; i++) {
//         let number1 = arr[i] - arr[i - 1];
//         arith.add(number1);
//         let number2 = arr[i] / arr[i - 1];
//         geo.add(number2);
//         let number3 = arr[arr.length - 1];
//         console.log(number3);
//     }
//     console.log(arith);
//     console.log(geo)
//     if (arith.size === 1) {
//         return 'Arithmetic';
//     }
//     if (geo.size === 1) {
//         return 'Geometric';
//     }
//     return -1;
// }
// console.log(mathSequences([2, 4, 6, 8]));



// // LONGEST WORDS
// function longestWords(str) {
//     let words = str.split(' ');
//     let size = 0;
//     let max = [''];
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length >= size) {
//             size = words[i].length;
//             if (max[max.length - 1].length < words[i].length) {
//                 max = [];
//                 max.push(words[i]);
//             } else {
//                 max = [...max, words[i]];
//             }
//         }
//     }
//     return [...max];
// }
// console.log(longestWords('I am a web develop who dont want to work today, maybe I just wanna stay and do nothing'));



// // PRIME NUMBERS
// function isPrime(num) {
//     for (let i = 2; i < num; i++){
//         if (num % i === 0) {
//             return false
//         }

//         return true;
//     }
// }
// console.log(isPrime(8));
// console.log(isPrime(11));



// // CAPITALIZE FISRT LETTER
// function capitalizeWords(str) {
//     let words = str.split(' ').map(word => {
//         return word.charAt(0).toUpperCase() + word.slice(1);
//     })
//     return words.join(' ');
// }
// console.log(capitalizeWords('I want to quit everything and just draw and play music'));



// // ARRAY SUM
// function ArraySum(arr) {
//     let tempArr = arr.sort((a, b) => {
//         return a - b; 
//     });
//     let largest = tempArr.pop();
//     console.log(tempArr);
//     let number = 0;
//     tempArr.forEach(item => (number += item));
//     return largest === number;
// }
// console.log(ArraySum([1, 6, 2, 4, 13]));
// console.log(ArraySum([1, 2, 4, 34, 22]));


// // UNIQUE OBJECT PROPERTY VALUE
// let products = [
//     {
//         title: 'Iphone 8',
//         company: 'apple'
//     },
//     {
//         title: 'Galaxy',
//         company: 'samsung'
//     }, 
//     {
//         title: 'Iphone7',
//         company: 'apple'
//     },
//     {
//         title: 'Iphone Xs',
//         company: 'apple'
//     },
//     {
//         title: 'HTC Phone',
//         company: 'htc'
//     }
// ]
// function getUnique(arr) {
//     // let tempArr = arr.map(product => product.company);
//     // return [...new Set(tempArr)];
//     return [...arr.reduce((acc, curr) => {
//         acc.add(curr.company)
//         return acc;
//     }, new Set())]
// }
// console.log(getUnique(products));



// // COUNTING LETTERS
// function countingLetters(str) {
//     let tempArr = str.split(' ');
//     tempArr = tempArr.map(item => {
//         let tempItem = item.toLowerCase().split('');
//         return tempItem.reduce((acc, curr) => {
//             acc[curr] = acc[curr] ? acc[curr] + 1 : 1;
//             if (acc[curr] > acc.max) {
//                 acc.max = acc[curr];
//             }
//             return acc
//         }, {max: 1, word: item});
//     })
//     let amount = 1;
//     let word = '';
//     for (let item of tempArr) {
//         if (item.max > amount) {
//             amount = item.max;
//             word = item.word;
//         }
//     }

//     if (amount > 1) {
//         return word;
//     }
// }
// console.log(countingLetters('Javascript is the greatest programming languageeeee'));



// // SECOND VALUE
// function secondValue(arr) {
//     let values = [...new Set(arr)].sort((a, b) => a - b)
//     if (values.length < 2) {
//         return `${values[0]}`
//     } else if (values.length === 2) {
//         return `${values[0]} ${values[1]}`
//     } else {
//         return `${values[1]} ${values[values.length - 2]}`
//     }
// }
// console.log(secondValue([1]));
// console.log(secondValue([2, 4]));
// console.log(secondValue([11, 22, 44]));
// console.log(secondValue([3, 2, 88, 11, 11, 43, 25, 56, 4, 2, 2]));



// // COUNT REPEATING LETTERS
// function countLetters(str) {
//     let tempArr = str.split('');
//     let letters = [];
//     let count = 1;
//     for (let i = 0; i < tempArr.length; i++) {
//         if (tempArr[i] === tempArr[i + 1]) {
//             count++;
//         } else {
//             let value = `${count}${tempArr[i]}`;
//             letters = [...letters, value];
//             count = 1;
//         }
//     }
//     return letters.join('');
// }
// console.log(countLetters('fffffferrrttttttoooooooooo'));



// REPEATED NUMBERS
// return number with most repeats
// if two numbers are repeated the same return first
// if none repeated return -1
function testRepeat(arr) {
    let max = 1;
    let position = 0;
    let value = -1;

    let tempNumbers = arr.reduce((acc, curr, index) => {
        acc[curr] = acc[curr] ? { ...acc[curr], amount: acc[curr].amount + 1 } : { amount: 1, index}; 
        let amount = acc[curr].amount;
        let place = acc[curr].index;
        if (amount > max || (amount === max && place <= position && amount > 1)) {
            max = amount
            value = curr
            position = place
        }
        return acc;
    }, {});
    return value;
}
console.log(testRepeat([5, 2, 2, 1, 5]));
// return 5
console.log(testRepeat([6, 3, 3, 10, 10, 10]));
// return 10
console.log(testRepeat([5, 3, 2, 9, 7]));
// return -1