function solve(num) {

    for (let i = 0; i < num; i += 1) {
        console.log('*'.repeat(num).split('').join(' '));
    }
}

solve(5);