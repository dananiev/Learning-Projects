function primeNumberChecker(num) {

    let number = num;
    let isPrime = true;

    for (let i = 2; i < Math.ceil(Math.sqrt(number)); i += 1) {
        if (number % i === 0) {
            isPrime = false;
            break;
        }
    }
    console.log(isPrime);
}

primeNumberChecker(7);