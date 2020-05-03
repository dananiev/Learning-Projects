function processOddNumber(arr) {

    let oddNumbers = arr.filter(e => arr.indexOf(e) % 2 != 0);

    let doubleNumbers = oddNumbers.map(e => e * 2);

    let reversedArr = doubleNumbers.reverse();

    console.log(reversedArr.join(' '));
}

processOddNumber([10, 15, 20, 25]);