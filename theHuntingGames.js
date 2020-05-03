function theHuntingGames(input) {

    let days = +input.shift();
    let playersCount = +input.shift();
    let groupEnergy = +input.shift();
    let waterPerPerson = +input.shift();
    let foodPerPerson = +input.shift();

    let water = days * playersCount * waterPerPerson;
    let food = days * playersCount * foodPerPerson;

    let consumedEnergy = input.map(Number);

    for (let day = 1; day <= days; day += 1) {
        let energy = consumedEnergy.shift();
        groupEnergy -= energy;

        if (groupEnergy <= 0) {
            break;
        }

        if (day % 2 === 0) {
            groupEnergy *= 1.05;
            water *= 0.7;
        }

        if (day % 3 === 0) {
            groupEnergy *= 1.1;
            food -= food / playersCount;
        }
    }

    if (groupEnergy <= 0) {
        console.log(`You will run out of energy. You will be left with ${food.toFixed(2)} food and ${water.toFixed(2)} water.`);
    } else {
        console.log(`You are ready for the quest. You will be left with - ${groupEnergy.toFixed(2)} energy!`);
    }

}

theHuntingGames([ '10',
'7',
'5035.5',
'11.3',
'7.2',
'942.3',
'500.57',
'520.68',
'540.87',
'505.99',
'630.3',
'784.20',
'321.21',
'456.8',
'330',
'' ]);
