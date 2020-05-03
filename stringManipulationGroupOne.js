function solve(input) {

    let stringForChange = input.shift();
    let lastIndex = '';

    const translate = (char, replacement) => {
        let regex = new RegExp(char, 'g');
        stringForChange = stringForChange.replace(regex, replacement);
        console.log(stringForChange);
    };

    const include = (string) => {
        let convert = stringForChange.split(' ');

        if (convert.includes(string)) {
            console.log('True');
        } else {
            console.log('False');
        }
    };

    const start = (string) => {
        let convert = stringForChange.split(' ');

        if (convert[0] === string) {
            console.log('True');
        } else {
            console.log('False');
        }
    };

    const lowerCase = () => {
        stringForChange = stringForChange.toLowerCase();
        console.log(stringForChange);
    };

    const findIndex = (char) => {
        lastIndex = stringForChange.lastIndexOf(char);
        console.log(lastIndex);
    };

    const remove = (startIndex, count) => {
        let removed = stringForChange.substr(count);
        console.log(removed);
    };

    let commandParser = {
        'Translate': translate,
        'Includes': include,
        'Start': start,
        'Lowercase': lowerCase,
        'FindIndex': findIndex,
        'Remove': remove
    };

    for (let line of input) {
        if (line === 'End') {
            break;
        }

        let tokens = line.split(' ');
        let command = tokens.shift();

        let valFunc = commandParser[command];
        valFunc(...tokens);
    }
}

solve (
    [ '//Thi5 I5 MY 5trING!//',
      'Translate 5 s',
      'Includes string',
      'Start //This',
      'Lowercase',
      'FindIndex i',
      'Remove 0 10',
      'End' ]
);