function substitute(input) {
    let k = +input.shift();
    let l = +input.shift();
    let m = +input.shift();
    let n = +input.shift();

    let counter = 0;

    for (let firstNum = k; firstNum <= 8; firstNum += 1) {
        for (let secondNum = 9; secondNum >= l; secondNum -= 1) {
            for (let thirdNum = m; thirdNum <= 8; thirdNum += 1) {
                for (let fourthNum = 9; fourthNum >= n; fourthNum -= 1) {

                    if (firstNum % 2 === 0 && secondNum % 2 === 1 && thirdNum % 2 === 0 && fourthNum % 2 === 1) {
                        if (firstNum === thirdNum && secondNum === fourthNum) {
                            console.log('Cannot change the same player.');
                        } else {
                            console.log(`${firstNum}${secondNum} - ${thirdNum}${fourthNum}`);
                            counter += 1;
                        }

                        if (counter === 6) {
                            return;
                        }
                    }

                }
            }
        } 
    }
}

substitute([7, 6, 8, 5]);