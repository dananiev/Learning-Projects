function solve(array, method) {
    let ascending = (a, b) => a - b;
    let descending = (a, b) => b - a;

    let sorted = {
        asc : ascending,
        desc : descending
    };

    return array.sort(sorted[method]);
}

console.log(solve([14, 7, 17, 6, 8], 'asc'));