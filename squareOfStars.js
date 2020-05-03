function solve(input) {

    for (let i = 0; i < input; i += 1) {
        console.log('*'.repeat(input).split('').join(' '));
    }

}

solve(2);