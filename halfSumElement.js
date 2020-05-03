function halfSumElement(input) {
    let n = +input.shift();
    let sum = 0;
    let max = 0;
    for (let i = 0; i < n; i += 1) {
        let num = +input.shift();
        if (num > max) {
            max = num;
        }
        sum = sum + num;
    }
    sum = sum - max;
    if (sum === max) {
        console.log('Yes');
        console.log(`Sum = ${sum}`);
    } else {
        let diff = Math.abs(max - sum);
        console.log('No');
        console.log(`Diff = ${diff}`);
    }
}

halfSumElement([7, 3, 4, 1, 1, 2, 12, 1]);