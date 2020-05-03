function addAndSubtract(firstNum, secondNum, lastNum) {

    function sumOfFirstNumberAndSecondNumber(firstNum, secondNum) {
        return firstNum + secondNum;
    }

    let result = sumOfFirstNumberAndSecondNumber(firstNum, secondNum) - lastNum;

    console.log(result);

}

addAndSubtract(23, 6, 10);