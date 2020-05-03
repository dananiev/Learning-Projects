function matrix(input) {
    let a = +input.shift();
    let b = +input.shift();
    let c = +input.shift();
    let d = +input.shift();

    for (let firstRowFirstNum = a; firstRowFirstNum <= b; firstRowFirstNum += 1) {
        for (let firstRowSecondNum = a; firstRowSecondNum <= b; firstRowSecondNum += 1) {
            for (let secondRowFirstNum = c; secondRowFirstNum <= d; secondRowFirstNum += 1) {
                for (let secondRowSecondNum = c; secondRowSecondNum <= d; secondRowSecondNum += 1) {
                    if (((firstRowFirstNum + secondRowSecondNum) === (firstRowSecondNum + secondRowFirstNum)) &&
                    (firstRowFirstNum != firstRowSecondNum) && (secondRowFirstNum != secondRowSecondNum)) {
                        console.log(`${firstRowFirstNum}${firstRowSecondNum}`);
                        console.log(`${secondRowFirstNum}${secondRowSecondNum}`);
                        console.log();
                    }
                }
            }
        }
    }
}

matrix([1, 2, 3, 4]);