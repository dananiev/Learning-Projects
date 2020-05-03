function magicMatrices(matrix) {

    function getFirstSum(row) {
        let sum = 0;
        for (let i = 0; i < row.length; i += 1) {
            sum += row[i];
        }
        return sum;
    }

    let firstSum = getFirstSum(matrix[0]);
    let isMagic = true;
    let currSumRow = 0;
    let currSumCol = 0;

    for (let i = 0; i < matrix.length; i += 1) {
        for (let j = 0; j < matrix[i].length; j += 1) {
            currSumRow += matrix[i][j];
            currSumCol += matrix[j][i];
        }
        if (currSumRow !== firstSum || currSumCol !== firstSum) {
            isMagic = false;
        }

        currSumCol = 0;
        currSumRow = 0;
    }

    console.log(isMagic);

}

magicMatrices(
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
);