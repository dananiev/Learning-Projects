function train(wagons) {

    let passangersInWagons = wagons
        .shift()
        .split(' ')
        .map(Number);
    let maxWagonCapacity = +wagons.shift();

    for (let commands of wagons) {
        let currentCommand = commands.split(' ');

        if (currentCommand[0] === 'Add') {
            passangersInWagons.push(+currentCommand[1]);
        } else {
            for (let i = 0; i < passangersInWagons.length; i += 1) {
                if (passangersInWagons[i] + Number(currentCommand[0]) <= maxWagonCapacity) {
                    passangersInWagons[i] += Number(currentCommand[0]);
                    break;
                }
            }
        }
    }
    console.log(passangersInWagons.join(' '));
}

train (['32 54 21 12 4 0 23',
    '75',
    'Add 10',
    'Add 0',
    '30',
    '10',
    '75'
]);