function solve(input) {

    let updatedString = input.shift();

    const change = (char, replacement) => {
        let regex = new RegExp(char, 'g');
        updatedString = updatedString.replace(regex, replacement);
        console.log(updatedString); 
    }

    const include = (string) => {
        let convertToArr = updatedString.split(' ');

        if (convertToArr.includes(string)) {
            console.log('True');
        } else {
            console.log('False');
        }
    }

    const end = (string) => {
        let lastString = updatedString.endsWith('string');

        if (lastString === string) {
            console.log('True');
        } else {
            console.log('False');
        }
    }

    const upperCase = () => {
        updatedString = updatedString.toUpperCase();
        console.log(updatedString);
    }

    const findIndex = (char) => {
        let firstIndex = updatedString.indexOf(char);
        console.log(firstIndex);
    }

    const cut = (startIndex, length) => {
        let leftChar = updatedString.substr(startIndex, length);
        console.log(leftChar);
    }

    let commandParser = {
        'Change': change,
        'Includes': include,
        'End': end,
        'Uppercase': upperCase,
        'FindIndex': findIndex,
        'Cut': cut
    };

    for (let line of input) {
        if (line === 'Done') {
            break;
        }

        let tokens = line.split(' ');
        let command = tokens.shift();

        let func = commandParser[command];
        func(...tokens);
    }

}

solve (
    [ '//Th1s 1s my str1ng!//',
      'Change 1 i',
      'Includes string',
      'End my',
      'Uppercase',
      'FindIndex I',
      'Cut 5 5',
      'Done' ]
);