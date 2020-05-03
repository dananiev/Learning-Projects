function multiplyTable(input) {
    let num = +input.shift();
    
    let singleDigitNum = 0;
    let doubleDigitNum = 0;
    let tripleDigitNum = 0;

    singleDigitNum = num % 10;
    //console.log(singleDigitNum);
    doubleDigitNum = (num / 10) % 10;
    //console.log(doubleDigitNum);
    tripleDigitNum = num / 100;
    //console.log(tripleDigitNum);

    for (let singleD = 1; singleD <= singleDigitNum; singleD += 1) {
        for (let doubleD = 1; doubleD <= doubleDigitNum; doubleD += 1) {
            for (let tripleD = 1; tripleD <= tripleDigitNum; tripleD += 1) {
                console.log(`${singleD} * ${doubleD} * ${tripleD} = ${singleD * doubleD * tripleD};`);
            }
        }
    }
}

multiplyTable([324]);