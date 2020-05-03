function sumPrimeNonPrime(input) {
    let sumPrime = 0;
    let sumNonprime = 0;

    let command = input.shift();

    while (command !== 'stop') {
        let num = +input.shift();
        let count = 0;

        for (let i = 2; i <= num/2; i += 1) {
            if (num % i === 0) {
                count += 1;
                break;
            }
        }

        if (num < 0) {
            console.log('Number is negative.');
        } else if (count > 0 || num == 1) {
            sumNonprime += num;
        } else {
            sumPrime += num;
        }

        command = input.shift();
    }
    console.log(`Sum of all prime numbers is: ${sumPrime}`);
    console.log(`Sum of all non prime numbers is: ${sumNonprime}`);
}

sumPrimeNonPrime([3, 9, 0, 7, 19, 4, 'stop']);