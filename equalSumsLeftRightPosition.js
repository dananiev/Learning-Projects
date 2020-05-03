function equalSumsLeftRightPositions(input) {
    let num1 = +input.shift();
    let num2 = +input.shift();

    let output = '';

    for (let i = num1; i <= num2; i += 1) {
        let currentNum = String(i);

        let leftSum = 0;
        let middleNum = 0;
        let rightSum = 0;

        for (let j = 0; j < currentNum.length; j += 1) {
            let value = Number(currentNum[j]);

            switch(j) {
                case 0:
                    leftSum += value;
                    break;
                case 1:
                    leftSum += value;
                    break;
                case 2:
                    middleNum = value;
                    break;
                case 3:
                    rightSum += value;
                    break;
                case 4:
                    rightSum += value;
                    break;
            }
        }
        if (leftSum === rightSum) {
            output += `${i} `;
        } else {
            let minSum = Math.min(leftSum, rightSum);
            let maxSum = Math.max(leftSum, rightSum);

            minSum += middleNum;
            if (minSum == maxSum) {
                output += `${i} `;
            }
        }
    }
    console.log(output);
}

equalSumsLeftRightPositions([10000, 10100]);