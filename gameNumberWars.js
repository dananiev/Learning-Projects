function forth(input) {
    let name1 = input.shift();
    let name2 = input.shift();
    let row = input.shift();

    let name1Points = 0;
    let name2Points = 0;

    while (row !== 'End of game') {
        let name1Card = +row;
        let name2Card = +input.shift();

        if (name1Card > name2Card) {
            name1Points += (name1Card - name2Card);
        } else if (name1Card < name2Card) {
            name2Points += (name2Card - name1Card);
        } else {
            console.log('Number wars!');
            name1Card = +input.shift();
            name2Card = +input.shift();
            if (name1Card > name2Card) {
                console.log(`${name1} is winner with ${name1Points} points`);
            } else {
                console.log(`${name2} is winner with ${name2Points} points`);
            }
            break;
        }
        row = input.shift();
    }

    if (row == 'End of game') {
        console.log(`${name1} has ${name1Points} points`);
        console.log(`${name2} has ${name2Points} points`);
    }
}

forth(['Elena',
    'Simeon',
    6,
    3,
    2,
    5,
    8,
    9,
    'End of game']);