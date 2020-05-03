function passwordGenerator(input) {
    let n = +input.shift();
    let l = +input.shift();
    let line = '';

    for (let i = 1; i < n; i += 1) {
        for (let j = 1; j < n; j += 1) {
            for (let k = 'a'; k < 'a' + l; k += 1) {
                for (let d = 'a'; d < 'a' + l; d += 1) {
                    for (let m = 1; m <= n; m += 1) {
                        if ((m > i) && (m > j)) {
                            line += `${i}${j}${k}${d}${m} `;
                        }
                    }
                }
            }
        }
    }
    console.log(line);
}

passwordGenerator([2, 4]);
