function factorialDivision(numOne, numTwo) {

    function facCalculator(num) {
        let factorial = 1;
        for (let i = 2; i <= num; i += 1) {
            factorial *= i;
        }
        return factorial;
    }

    let one = facCalculator(numOne);
    let two = facCalculator(numTwo);

    let result = one / two;

    console.log(result.toFixed(2));

}

factorialDivision(5, 2);