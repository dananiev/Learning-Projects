function numbersFromNTo1(input) {
    let num = +input.shift();

    for(let i = num; i > 0; i -= 1) {
        console.log(i);
    }
}

numbersFromNTo1([2]);