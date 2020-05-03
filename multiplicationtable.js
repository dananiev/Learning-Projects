function multiplicationtable(num) {

    let multiplication = num;
    let sum = 0;

    for (let i = 1; i <= 10; i += 1) {
        sum = i * multiplication;
        console.log(`${multiplication} X ${i} = ${sum}`);
    }   
}

multiplicationtable(5); 