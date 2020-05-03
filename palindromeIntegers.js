function palindromeIntegers(numbers) {

    let isPalindrome = (a, b) => a === b;

    for (let i = 0; i < numbers.length; i += 1) {
        
        let currentNumber = numbers[i];
        let reversedNum = +currentNumber
        .toString()
        .split('')
        .reverse()
        .join('');

        console.log(isPalindrome(currentNumber, reversedNum));
    }

}

palindromeIntegers([123, 323, 421, 121]);