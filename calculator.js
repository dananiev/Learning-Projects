function calculator(numOne, operator, numTwo){

    let first = numOne;
    let symbol = operator;
    let second = numTwo;

    switch (operator) {
        case '+': console.log((first + second).toFixed(2));
        break;
        case '-': console.log((first - second).toFixed(2));
        break;
        case '*': console.log((first * second).toFixed(2));
        break;
        case '/': console.log((first / second).toFixed(2));
        break;
    }
}

calculator(5, '+', 10);