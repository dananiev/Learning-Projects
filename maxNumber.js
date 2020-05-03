function maxNumber(input) {
    let n = +input[0];
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 1; i <= n; i += 1) {
        let num = +input[i];
        if (num > max) {
            max = num;
        }
    }
    console.log(max);
}

maxNumber([2, 100, 99]);