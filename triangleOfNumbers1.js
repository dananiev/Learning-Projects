function triangleOfNumbers(num) {

    for (let row = 1; row <= num; row += 1) {
        let output = '';
        for (let cow = 1; cow <= row; cow += 1) {
            output += row + ' ';
        }

        console.log(output);
    }

}

triangleOfNumbers(3);