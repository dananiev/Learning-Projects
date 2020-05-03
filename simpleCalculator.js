function simpleCalculator(numOne, numTwo, operator) {

    let operation = '';

    switch (operator) {
        case 'multiply':
            operation = (numOne, numTwo) => numOne * numTwo;
            break;
        case 'divide':
            operation = (numOne, numTwo) => numOne / numTwo;
            break;
        case 'add':
            operation = (numOne, numTwo) => numOne + numTwo;
            break;
        case 'subtract':
            operation = (numOne, numTwo) => numOne - numTwo;
            break; 
    }

    let result = operation(numOne, numTwo);
    console.log(result);

}

simpleCalculator(5, 5, 'multiply');