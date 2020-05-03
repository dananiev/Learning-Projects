function palindromeInt(arr) {

    for (let num of arr) {
        console.log(isPalindrome(num));
    }

    function isPalindrome(num) {
        let reversedNum = '';
        let numAsStr = num.toString();

        for (let i = numAsStr.length - 1; i >= 0; i -= 1) {
            reversedNum += numAsStr[i];
        }

        return numAsStr === reversedNum;
    }

}

palindromeInt([123, 323, 421, 121]);