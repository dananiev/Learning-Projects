function solve(input) {
    
    let number = input;
    let kindOf = typeof(number);
    let result = 0;

    if (kindOf === 'number') {
        result = Math.pow(input, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${kindOf}.`);
    }
}

solve(5);