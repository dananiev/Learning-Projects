function sumOfOddNumbers(num) {
    let counter = num;
    let sum = 0;
    let odd = 1;

    for (let i = 1; i <= counter; i += 1) {
        sum += odd;
        console.log(odd);
        odd += 2;
    }
    console.log(`Sum: ${sum}`);
}

sumOfOddNumbers(5);