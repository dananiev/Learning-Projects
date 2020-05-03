function magicMatrix(input) {

    let matrix = input.map(row => row.split(' ').map(Number));
    let sum = matrix[0].reduce((a, b) => a + b);
    let isMagic = true;

    for (let i = 1; i < matrix.length; i += 1) {
        if (sum !== matrix[i].reduce((a, b) => a + b)) {
            isMagic = false;
        }
    }

    for (let col = 0; col < matrix[0].length; col += 1) {
        let sumCol = 0;
        for (let row = 0; row < matrix.length; row += 1) {
            sumCol += matrix[row][col];
        }

        if (sumCol !== sum) {
            isMagic = false;
        }
    }

    console.log(isMagic);
}

magicMatrix(
    [4, 5, 6],
    [6, 5, 4],
    [5, 5, 5]
);