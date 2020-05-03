function multiplicationTable(num) {

    let result = 0;

    for (let i = 1; i <= 10; i += 1) {
        result = num * i;
        console.log(num + ' X ' + i + ' = ' + result);
    }

}

multiplicationTable(5);