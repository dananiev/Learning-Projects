function specialNumbers(input) {
    let n = +input.shift();

    let output = '';

    for (let i = 1; i <= 9; i += 1) {
        for (let j = 1; j <= 9; j += 1) {
            for (let k = 1; k <= 9; k += 1) {
                for (let l = 1; l <= 9; l += 1) {
                    if (n % i === 0 && n % j === 0 && n % k === 0 && n % l === 0) {
                        output += `${i}${j}${k}${l} `;
                    }
                }
            }
        }
    }
    console.log(output);
}

specialNumbers([3]);