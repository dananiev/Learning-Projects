function solve(x, y) {

    let num1 = Number(x);
    let num2 = Number(y);
    let sum = 0;

    for (let i = num1; i <= num2; i += 1) {
        sum += i;
    }

    console.log(sum);
}

solve('1', '5');