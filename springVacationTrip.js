function springVacationTrip(input) {

    let days = +input.shift();
    let budget = +input.shift();
    let people = +input.shift();
    let fuelPerKM = +input.shift();
    let food = +input.shift();
    let room = +input.shift();

    if (people > 10) {
        room *= 0.75;
    }

    let expenses = days * people * (food + room);

    for (let i = 1; i <= days; i += 1) {
        let travelledDistance = +input.shift();
        expenses += travelledDistance * fuelPerKM;

        if (i % 3 === 0 || i % 5 === 0) {
            expenses *= 1.4;
        }

        if (i % 7 === 0) {
            expenses -= expenses / people;
        } 
    }

    if (expenses > budget) {
        console.log(`Not enough money to continue the trip. You need ${(expenses - budget).toFixed(2)}$ more.`);
    } else {
        console.log(`You have reached the destination. You have ${(budget - expenses).toFixed(2)}$ budget left.`);
    }

}

springVacationTrip([ '10',
'20500',
'11',
'1.2',
'8',
'13',
'100',
'150',
'500',
'400',
'600',
'130',
'300',
'350',
'200',
'300' ]);