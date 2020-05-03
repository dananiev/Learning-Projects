function arrayManipulations(commands) {

    let arr = commands
        .shift()
        .split(' ')
        .map(Number);

        for (let i = 0; i < commands.length; i += 1) {
            let [command, firstNum, secondNum] = commands[i].split(' ');

            firstNum = +firstNum;
            secondNum = +secondNum;

            if (command === 'Add') {
                arr.push(firstNum);
            }

            if (command === 'Remove') {
                let index = arr.indexOf(firstNum);
                if (index > -1) {
                    arr.splice(index, 1);
                }
            }

            if (command === 'RemoveAt') {
                arr.splice(firstNum, 1);
            }

            if (command === 'Insert') {
                arr.splice(secondNum, 0, firstNum);
            }
        }    
        console.log(arr.join(' '));
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3'
]);