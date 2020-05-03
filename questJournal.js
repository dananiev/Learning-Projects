function questJournal(input) {

    let array = input[0].split(', ');

    for (let i = 1; i < input.length; i += 1) {
        if (input[i] === 'Retire!') {
            break;
        }

        let tokens = input[i].split(' - ');

        let command = tokens[0];
        let quest = tokens[1];

        if (command === 'Start') {
            let isExist = array.indexOf(quest);
            if (isExist === -1) {
                array.push(quest);
            }
        } else if (command === 'Complete') {
            let index = array.indexOf(quest);
            if (index !== -1) {
                array.splice(index, 1);
            }
        } else if (command === 'Side Quest') {
            let first = quest.split(':')[0];
            let second = quest.split(':')[1];

            let isExistFirst = array.indexOf(first);
            let isExistSecond = array.indexOf(second);

            if (isExistSecond === -1) {
                if (isExistFirst !== -1) {
                    array.splice(isExistFirst + 1, 0, second);
                }
            }
        } else if (command === 'Renew') {
            let isExist = array.indexOf(quest);

            if (isExist !== -1) {
                let element = array.splice(isExist, 1);
                array.push(element);
            }
        }
    }

    console.log(array.join(', '));

}

questJournal(['Hello World, For loop, If else', 'Start - While loop', 'Complete - For loop', 'Retire!']);