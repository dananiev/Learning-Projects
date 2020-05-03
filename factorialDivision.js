function factorialDivision(firstNumber, secondNumber) {

    function factorialCalculator(number) {
        let factorial = 1;
        for (let i = 2; i <= number; i += 1) {
            factorial *= i;
        }
        return factorial;
    }  

    let one = factorialCalculator(firstNumber);
    let two = factorialCalculator(secondNumber);

    let result = one / two;

    console.log(result.toFixed(2));

}

factorialDivision(5, 2);