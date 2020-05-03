function printAndSum(numberOne, numberTwo) {

    let sum = 0;
    let result = '';

    for (let i = numberOne; i <= numberTwo; i += 1) {
        sum += i;
        result += i + ' ';
    }
    console.log(result);
    console.log(`Sum: ${sum}`);

}

printAndSum(5, 10);