function numberPyramid(input) {
    let n = +input.shift();
    let current = 1;
    let isBigger = false;
    let printCurrentLine = '';

    for (let rows = 1; rows <= n; rows += 1) {
        for (let cols = 1; cols <= rows; cols += 1) {
            if (current > n) {
                isBigger = true;
                break;
            }
            printCurrentLine += current + ' ';
            current += 1;
        }
        console.log(printCurrentLine);
        printCurrentLine = '';
        if (isBigger) {
            break;
        }
    }
}

numberPyramid([10]);