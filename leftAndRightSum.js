function leftAndRightSum(input) {
    let n = +input[0];
    let leftSum = 0;
    let rightSum = 0;

    for (let i = 1; i <= n; i += 1) {
        let num = +input[i];
        leftSum += num;
    }

    for (let j = n + 1; j <= n * 2; j += 1) {
        let num = +input[j];
        rightSum += num;
    }

    let diff = Math.abs(leftSum - rightSum);
    if (diff == 0) {
        console.log('Yes, sum = ' + leftSum);
    } else {
        console.log('No, diff = ' + diff);
    }
}

leftAndRightSum([2, 10, 90, 60, 40]);