function solve(n, m) {

    let sum = 0;

    for (let i = +n; i <= +m; i += 1) {
        sum += i;
    }

    console.log(sum);

}

solve('1', '5');