// CHALLENGE 1: LONGEST WORD
// Return the longest word of a string
// ex. longestWord('Hi there, my name is Brad') === 'there,'

function longestWord(sen) {
    // create filtered array
    const wordArr = sen.toLowerCase().match(/[a-z0-9]+/g);
    // sort by length
    const sorted = wordArr.sort((a, b) => b.length - a.length);
    // if multiple words, put into array
    const longestWordArr = sorted.filter(word => word.length === sorted[0].length);
    //Check if more than one word has the same max longest length
    if (longestWordArr.length === 1) {
        return longestWordArr[0];
    } else {
        return longestWordArr;
    }
}
// Call Function
let longestWordResult = longestWord('Hello there, my name is Brad');
console.log(longestWordResult);

// CHALLENGE 2: ARRAY CHUNKING
// Split an array into chunked arrays of a specific length
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 3) === [[1, 2, 3],[4, 5, 6],[7]]
// ex. chunkArray([1, 2, 3, 4, 5, 6, 7], 2) === [[1, 2],[3, 4],[5, 6],[7]]

function chunkArray(arr, len) {
    // SOLUTION 1
    // //Init chunked arr
    // const chunkedArr = [];
    // //Set index
    // let i = 0;
    // //Loop while index is less than the array length
    // while (i < arr.length) {
    //     //Slice out from the index to the index + the chunk length and push on to the chunked array
    //     chunkedArr.push(arr.slice(i, i + len));
    //     //increment by chunk length
    //     i += len;
    // }
    // return chunkedArr;

    // SOLUTION 2
    const chunkedArr = [];
    arr.forEach(val => {
        const last = chunkedArr[chunkedArr.length - 1];
        if (!last || last.length === len) {
            chunkedArr.push([val]);
        } else {
            last.push(val);
        }
    });

    return chunkedArr;
}
//Call Function
let chunkedArrResult = chunkArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2);
console.log(chunkedArrResult);


// CHALLENGE 3: FLATTEN ARRAY
// Take an array of arrays and flatten to a single array
// ex. [[1, 2], [3, 4], [5, 6], [7]] = [1, 2, 3, 4, 5, 6, 7]

function flattenArray(arrays) {
    // SOLUTION 1
    // return arrays.reduce((a, b) => {
    //     return a.concat(b);
    // });

    // SOLUTION 2
    // return [].concat.apply([], arrays);

    // SOLUTION 3
    return [].concat(...arrays);
}

let flattenArrayResult = flattenArray([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
console.log(flattenArrayResult);

    // CHALLENGE 4: ANAGRAM
    // Return true if anagram and false if not
    // ex. 'elbow' === 'below'
    // ex. 'Dormitory' === 'dirty room##'

function isAnagram(str1, str2) {
    return formatStr(str1) === formatStr(str2);
}

function formatStr(str) {
    return str
        .replace(/[^\w]/g, '')
        .toLowerCase()
        .split('')
        .sort()
        .join('');
}

let anagramResult = isAnagram('car', 'arc');
console.log(anagramResult);

    // CHALLENGE 5: LETTER CHANGES
    // Change every letter of the string to the one that follows it and capitalize the vowels
    // Z should turn to A
    // ex. 'hello there' === 'Ifmmp UIfsf'

function letterChanges(str) {
    let newStr = str.toLowerCase().replace(/[a-z]/gi, char => {
        if (char === 'z' || char === 'Z') {
            return 'a';
        } else {
            return String.fromCharCode(char.charCodeAt() + 1);
        }
    });

    newStr = newStr.replace(/a|e|i|o|u/gi, vowel => vowel.toUpperCase());
    return newStr;
}

let letterChange = letterChanges('Hello There');
console.log(letterChange);
