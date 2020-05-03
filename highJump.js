function six(input) {
    let goal = +input.shift();
    let startHeight = goal - 30;

    let jumpsCount = 0;
    let tries = 0;

    while (true) {
        let jump = +input.shift();

        if (jump > startHeight) {
            jumpsCount += 1;
            tries = 0;

            if (startHeight >= goal) {
                console.log(`Tihomir succeeded, he jumped over ${goal}cm after ${jumpsCount} jumps.`);
                break;
            }
            startHeight += 5;
        } else {
            jumpsCount += 1;
            tries += 1;

            if (tries === 3) {
                console.log(`Tihomir failed at ${startHeight}cm after ${jumpsCount} jumps.`);
                break;
            }
        }
    }
}

six([250,
    225,
    224,
    225,
    228,
    231,
    235,
    234,
    235]);