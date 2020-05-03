function vacation(input) {
    let moneyForExcurtion = +input.shift();
    let availableMoney = +input.shift();

    let days = 0;
    let spendingDays = 0;
    let result = '';

    while (true) {
        let action = input.shift();
        let moneyForTheDay = +input.shift();

        days += 1;
        switch (action) {
            case 'spend':
                spendingDays += 1;
                availableMoney -= moneyForTheDay;
                break;
            case 'save':
                spendingDays = 0;
                availableMoney += moneyForTheDay;
                break;
            default:
                continue;
        }

        if (availableMoney >= moneyForExcurtion) {
            result = `You saved the money for ${days} days.`;
            break;
        }
        if (availableMoney <= 0) {
            availableMoney = 0.00;
        }
        if (spendingDays === 5) {
            result = `You can't save the money.
            ${days}`;
            break;
        }
    }
    console.log(result);
}

vacation([
    2000,
    1000,
    'spend',
    1200,
    'save',
    2000
]);