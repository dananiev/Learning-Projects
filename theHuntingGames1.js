function solve(input) {

    let daysOfAdventure = +input.shift();
    let countOfThePlayers = +input.shift();
    let groupsEnergy = +input.shift();
    let waterPerPerson = +input.shift();
    let foodPerPerson = +input.shift();

    let totalWater = daysOfAdventure * countOfThePlayers * waterPerPerson;
    let totalFood = daysOfAdventure * countOfThePlayers * foodPerPerson;

    let consumedEnergy = input.map(Number);

    for (let day = 1; day <= daysOfAdventure; day += 1) {
        let energy = consumedEnergy.shift();
        groupsEnergy -= energy;

        if (groupsEnergy <= 0) {
            break;
        }

        if (day % 2 === 0) {
            let energyCalculation = 0.05 * groupsEnergy;
            groupsEnergy = groupsEnergy + energyCalculation;
            
            let waterCalculation = 0.30 * totalWater;
            totalWater = totalWater - waterCalculation;
        }

        if (day % 3 === 0) {
            totalFood = totalFood - (totalFood / countOfThePlayers);
            let currentEnergy = 0.10 * groupsEnergy;
            groupsEnergy = groupsEnergy + currentEnergy;
        }
    }

    if (groupsEnergy >= 0) {
        console.log(`You are ready for the quest. You will be left with - ${groupsEnergy.toFixed(2)} energy!`);
    } else {
        console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);
    }

}

solve(
    [ '10',
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
      '' ]
);