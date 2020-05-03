function triangleOfNumbers(number) {
    let sequence = '';

    for (let i = 1; i <= number; i += 1) {
        for (let j = 1; j <= i; j += 1) {
            sequence += i + ' ';
        }
        console.log(sequence);
        sequence = '';
    }
}

triangleOfNumbers(3);