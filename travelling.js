function travelling(input) {
    let destination = '';
    let moneyNeeded = 0;
    let savings = '';
    let money = 0;

    while (true) {
        destination = input.shift();
        if (destination === 'End') {
            break;
        }

        moneyNeeded = +input.shift();
        money = 0;

        while (money < moneyNeeded) {
            savings = +input.shift();

            if (savings == 'End') {
                break;
            }

            money += +savings;

            if (money >= moneyNeeded) {
                console.log(`Going to ${destination}!`);
            }
        }
    }
}

travelling(['Greece', 1000, 200, 200, 300, 100, 150, 240, 'Spain', 1200, 300, 500, 193, 423, 'End']);