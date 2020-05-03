function radiansToDegrees(input) {
    let radians = +input.shift();
    let gradus = 0;

    gradus = radians * 180 / Math.PI;

    console.log(gradus.toFixed(0));

}

radiansToDegrees([3.1416]);