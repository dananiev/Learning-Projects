function solve(input) {

    let text = '';     

    const add = (string) => {
        text = text.concat(string);
    };

    const upgrade = (char) => {
        let incrementedChar = String.fromCharCode(char.charCodeAt(0) + 1);
        let regex = new RegExp(char, 'g');

        text = text.replace(regex, incrementedChar);
    };

    const print = () => {
        console.log(text);
    };

    const findIndex = (char) => {
        let indexes = [];

        for (let i = 0; i < text.length; i += 1) {
            let currentChar = text[i];

            if (currentChar === char) {
                indexes.push(i);
            }
        }

        let output = indexes.length === 0 
        ? 'None' 
        : indexes.join(' ');
        console.log(output);
    };

    const remove = (string) => {
        let regex = new RegExp(string, 'g');

        text = text.replace(regex, '');
    };

    let commandParser = {
        'Add': add,
        'Upgrade': upgrade,
        'Print': print,
        'Index': findIndex,
        'Remove': remove
    };

    for (let line of input) {
        if (line === 'End') {
            break;
        }

        let tokens = line.split(' ');
        let command = tokens.shift();

        commandParser[command](...tokens);
    }

}

solve([ 
        'Add abracadabra',
        'Print',
        'Upgrade a',
        'Print',
        'Index b',
        'Remove bbrb',
        'Print',
        'End' 
]);