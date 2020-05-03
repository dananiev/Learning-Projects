function magicNumber(input) {
    let magicNum = +input.shift();

    for (let i = 100000; i <= 999999; i += 1) {
        result = 1;
        let num = i;

        do {
            result = result * (num % 10);
            num = num / 10;
        } while (num > 0);

        if (result === magicNum) {
            console.log(i);
        }
    }
}

magicNumber([2]);