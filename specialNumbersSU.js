function specialNumbersSU(number) {

    for (let num = 1; num <= number; num += 1){
        let sumOfDigits = 0;
        let digits = num;
        while (digits > 0) {
            sumOfDigits += digits % 10;
            digits = parseInt(digits / 10);
        }
        if (sumOfDigits === 5 || sumOfDigits === 7 || sumOfDigits === 11) {
            console.log(`${num} ->` + ' ' + 'True');
        } else {
            console.log(`${num} ->` + ' ' + 'False');
        }
    }   

}

specialNumbersSU(15);