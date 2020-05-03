function threeBrothers(input) {
    let firstBrother = +input.shift();
    let secondBrother = +input.shift();
    let thirdBrother = +input.shift();
    let fatherTime = +input.shift();

    let totalCleaningTime = 1 / (1 / firstBrother + 1 / secondBrother + 1 / thirdBrother);
    let timeWithRest = totalCleaningTime * 1.15;
    let leftTime = fatherTime - timeWithRest;

    console.log(`Cleaning time: ${timeWithRest.toFixed(2)}`);

    if (leftTime >= 0) {
        leftTime = Math.floor(leftTime);
        console.log(`Yes, there is a surprise - time left -> ` + `${leftTime.toFixed(0)} hours.`);
    } else {
        leftTime = Math.abs(leftTime);
        leftTime = Math.ceil(leftTime);
        console.log(`No, there isn't a surprise - shortage of time -> ` + `${leftTime.toFixed(0)} hours.`);
    }
}

threeBrothers([3, 4, 5, 3.6]);