function solve(input) {

    let namesOfFrogs = input.shift().split(' ');
    let newName = '';

    for (let line of input) {
        let tokens = line.split(' ');
        let command = tokens[0];

        if (command === 'Join') {
            let name = tokens[1];
            if (!namesOfFrogs.includes(name)) {
                namesOfFrogs.push(name);
            }
        } else if (command === 'Jump') {
            let name = tokens[1];
            let ind = +tokens[2];
            if (ind >= 0 && ind <= namesOfFrogs.length) {
                namesOfFrogs.splice(ind, 0, name);
            }
        } else if (command === 'Dive') {
            let inde = +tokens[1];
            if (inde >= 0 && inde <= namesOfFrogs.length) {
                namesOfFrogs.splice(inde, 1);
            }
        } else if (command === 'First') {
            let count = +tokens[1];
            namesOfFrogs.slice(0, count + 1);
            console.log(namesOfFrogs.join(' '));
        } else if (command === 'Last') {
            let coun = +tokens[1];
            let num = namesOfFrogs.length - coun;
            newName = namesOfFrogs.slice(0);
            newName.splice(0, num);
            console.log(newName.join(' '));
        } else if (command === 'Print') {
            let word = tokens[1];

            if (word === 'Normal') {
                namesOfFrogs = namesOfFrogs;
            } else if (word === 'Reversed') {
                namesOfFrogs = namesOfFrogs.reverse();
            }
        }
    }
    console.log(`Frogs: ${namesOfFrogs.join(' ')}`);

}

solve(
    [ 'A B C D E F',
      'Join G',
      'Jump Q 3',
      'Last 3',
      'Dive 2',
      'Print Normal' ]
)