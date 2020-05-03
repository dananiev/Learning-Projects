function combinations(input) {
    let num = +input.shift();
    let validCombinationCounter = 0;

    for (let x1 = 0; x1 <= num; x1 += 1) {
        for (let x2 = 0; x2 <= num; x2 += 1) {
            for (let x3 = 0; x3 <= num; x3 += 1) {
                for (let x4 = 0; x4 <= num; x4 += 1) {
                    for (let x5 = 0; x5 <= num; x5 += 1) {
                        let combinations = x1 + x2 + x3 + x4 + x5;
                        if (combinations === num) {
                            validCombinationCounter += 1;
                        }
                    }
                }
            }
        }
    }
    console.log(validCombinationCounter);
}

combinations([25]);