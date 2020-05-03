function palindromes(inputArr) {

    let palindromesArr = [];

    inputArr.forEach((element) => {
        let textArr = element
            .split(' ')
            .join('');
        let reversedTextArr = textArr
            .split('')
            .reverse()
            .join('');

        if (textArr === reversedTextArr) {
            palindromesArr.push(textArr);
        }
    });

    if (palindromesArr.length > 0) {
        console.log(palindromesArr.join(', '));
    } else {
        console.log('No palindromes found');
    }
}

palindromes(['stella won no wallets', 'not a palindrome']);