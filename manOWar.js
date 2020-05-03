function solve(input) {

    let healthOfOurs = input.shift().split('>').map(Number);
    let healthOfTheirs = input.shift().split('>').map(Number);
    let HealthOfMax = Number(input.shift());

    for (let line of input) {
        let tokens = line.split(' ');
        let command = tokens[0];


        if (command === 'Retire') {
            break;
        }

        if (command === 'Fire') {
            let index = +tokens[1];
            let damage = +tokens[2];

            if (index >= 0 && index <= healthOfTheirs.length) {
                healthOfTheirs[index] -= damage;
                if (healthOfTheirs[index] <= 0) {
                    console.log('You lost! The pirate ship has sunken.');
                    break;
                } 
            }
        }

        if (command === 'Defend') {
            let startInd = +tokens[1];
            let endInd = +tokens[2];
            let damage = +tokens[3];

            if ((startInd >= 0 && startInd <= healthOfOurs.length) && (endInd >= 0 && endInd <= healthOfOurs.length)) {
                for (let i = startInd; i <= endInd; i += 1) {
                    healthOfOurs[i] -= damage;

                    if (healthOfOurs[i] <= 0) {
                        console.log('You lost! The pirate ship has sunken.');
                        break;
                    }
                }
            }
        }

        if (command === 'Repair') {
            let index = +tokens[1];

            if (index >= 0 && index < healthOfOurs.length) {
                healthOfOurs[index] = healthOfOurs[index] + Number(tokens[2]);
            }

            if (healthOfOurs[index] > HealthOfMax) {
                healthOfOurs[index] = HealthOfMax;
            }

        }

        if (command === 'Status') {
            let neededRepair = HealthOfMax * 0.2;

            let totalRepair = [];

            for (let i = 0; i < healthOfOurs.length; i += 1) {
                let currElement = healthOfOurs[i];
                if (currElement < neededRepair) {
                    totalRepair.push(currElement);
                }
            }
            if (totalRepair.length >= 0) {
                console.log(`${totalRepair.length} sections need repair.`);
            }
        }
    }

    let sumHealthOfOurs = 0;
    let sumHealthOfTheirs = 0;
    let bool = true;

    for (let i = 0; i < healthOfOurs.length; i += 1) {
        let element = healthOfOurs[i];
        sumHealthOfOurs += element;
        if (element <= 0 ) {
            bool = false;
        }
    }

    for (let i = 0; i < healthOfTheirs.length; i += 1) {
        let element = healthOfTheirs[i];
        sumHealthOfTheirs += element;
        if (element <= 0) {
            bool = false;
        }
    }

    if (bool) {
        console.log(`Pirate ship status: ${sumHealthOfOurs}`);
        console.log(`Warship status: ${sumHealthOfTheirs}`);
    }
}

solve (
    [ '12>13>11>20>66',
      '12>22>33>44>55>32>18',
      '70',
      'Fire 2 11',
      'Fire 8 100',
      'Defend 3 6 11',
      'Defend 0 3 5',
      'Repair 1 33',
      'Status',
      'Retire' ]
);