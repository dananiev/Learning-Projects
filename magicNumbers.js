function magicNumbers(input) {
    let magic = +input.shift();
    let line = '';

    for (let d1 = 1; d1 <= 9; d1 += 1) {
        for(let d2 = 1; d2 <= 9; d2 += 1) {
            for (let d3 = 1; d3 <= 9; d3 += 1) {
                for(let d4 = 1; d4 <= 9; d4 += 1) {
                    for(let d5 = 1; d5 <= 9; d5 += 1) {
                        for (let d6 = 1; d6 <= 9; d6 += 1) {
                            if (d1 * d2 * d3 * d4 * d5 * d6 === magic) {
                                line += `${d1}${d2}${d3}${d4}${d5}${d6} `;
                            }
                        }
                    }
                }
            }
        }
    }
    console.log(line);
}

magicNumbers([2]);