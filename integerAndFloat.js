function integerAndFloat(numOne, numTwo, numThree) {
    let sum = numOne + numTwo + numThree;
    if (sum % 1 === 0) {
        console.log(sum + ' ' + '- Integer');
    } else {
        console.log(sum + ' ' + '- Float');
    }
}

integerAndFloat(9, 100, 1.1);