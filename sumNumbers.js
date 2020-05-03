function sumNumbers(input) {
    let num = +input[0];
    let sum = 0;

    for (let i = 1; i <= num; i += 1) {
        let number = +input[i];
        sum = sum + number;
    }
    console.log(sum);
}

sumNumbers([2, 10, 20]);