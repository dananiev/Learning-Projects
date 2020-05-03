function cleverLili(input) {
    let age = +input[0];
    let washingMashinePrice = +input[1];
    let toyPrice = +input[2];

    let moneyYears = 0;
    let toyYears = 0;

    let money = 0;

    for (let i = 1; i <= age; i += 1) {
        if (i % 2 === 0) {
            moneyYears += 1;
        } else {
            toyYears += 1;
        }
    }

    for (let i = 1; i <= moneyYears; i += 1) {
        money += 10 * i;
    }

    money += (toyYears * toyPrice) - moneyYears;
    let diff = Math.abs(washingMashinePrice - money);

    if (money >= washingMashinePrice) {
        console.log(`Yes! ${diff.toFixed(2)}`);
    } else {
        console.log(`No! ${diff.toFixed(2)}`);
    }
}

cleverLili([10, 170.00, 6]);