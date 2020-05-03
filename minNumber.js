function minNumber(input) {
    let n = +input[0];
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 1; i <= n; i += 1) {
        let num = +input[i];
        if (num < min) {
            min = num;
        }
    }
    console.log(min);
}

minNumber([2, 99, 100]);