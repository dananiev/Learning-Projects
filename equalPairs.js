function equalPairs(input) {
    let n = +input.shift();
    let sumNewPair = 0;
    let sumOldPair = 0;
    let maxDiff = 1;
    let counter = 0;

    for (let i = 1; i <= n; i += 1) {
        let f = +input.shift();
        let g = +input.shift();
        sumNewPair = f + g;
        if (sumNewPair == sumOldPair) {
            counter += 1;
        }

        if (maxDiff < Math.abs(sumOldPair - sumNewPair) && i >= 2) {
            maxDiff = Math.abs(sumOldPair - sumNewPair);
        }

        if (sumNewPair != sumOldPair) {
            sumOldPair = sumNewPair;
        }
    }

    if (counter == n - 1) {
        console.log(`Yes, value=${sumNewPair}`);
    } else {
        console.log(`No, maxdiff=${maxDiff}`);
    }
}

equalPairs([3, 1, 2, 0, 3, 4, -1]);