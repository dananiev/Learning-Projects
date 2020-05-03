function printAndSum(one, two) {

    let result = '';
    let sum = 0;

    for (let i = one; i <= two; i += 1) {
        result += i + ' ';
        sum += i;
    }
    console.log(result);
    console.log(`Sum: ${sum}`);

}

printAndSum(5, 10);