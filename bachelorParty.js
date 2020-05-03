function bachelorParty(input) {
    let moneySinger = +input.shift();

    let allPeople = 0;
    let moneyForPeople = 0;
    let totalMoney = 0;

    while (true) {

        let command = input.shift();

        if (command === 'The restaurant is full') {
            break;
        }

        let numPeople = +command;
        allPeople += numPeople;

        if (numPeople < 5) {
            moneyForPeople = numPeople * 100;
        } else {
            moneyForPeople = numPeople * 70;
        }

        totalMoney += moneyForPeople;
    }

    if (totalMoney >= moneySinger) {
        let leftSum = totalMoney - moneySinger;
        console.log(`You have ${allPeople} guests and ${leftSum} leva left.`);
    } else {
        console.log(`You have ${allPeople} guests and ${totalMoney} leva income, but no singer.`);
    }
}

bachelorParty([2800,
    5,
    5,
    4,
    6,
    6,
    12,
    12,
    'The restaurant is full']);