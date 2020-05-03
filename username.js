function solve(input) {

    let username = input.shift();
    let reversedStr = [];

    for (let line of input) {

        if (line === 'Sign up') {
            break;
        }

        let tokens = line.split(' ');
        let command = tokens[0];
        let commandLower = tokens[1];

        if (command === 'Case') {
            if (commandLower === 'lower') {
                username = username.toLowerCase();
                console.log(username);
            } else if (commandLower === 'upper'){
                username = username.toUpperCase();
                console.log(username);
            }
        } else if (command === 'Reverse') {
            let startIndex = Number(tokens[1]);
            let endIndex = Number(tokens[2]);
            let arr = username.split('');

            if (startIndex !== -1 && endIndex !== -1) {
                for (let i = startIndex; i <= endIndex; i += 1) {
                    reversedStr.push(arr[i]);
                }
            }
            let reversedArr = reversedStr.reverse().join('');
            console.log(reversedArr);
        } else if (command === 'Cut') {
            let subst = tokens[1];
            let leng = subst.length;
            let startIn = username.indexOf(subst);
            let endInd = leng + startIn;

            if (username.includes(subst)) {
                let cuttedSubstring = username.substring(startIn, endInd);
                console.log(username.replace(cuttedSubstring, ''));
            } else {
                console.log(`The word ${username} doesn't contain ${subst}.`);
            }
        } else if (command === 'Replace') {
            let char = tokens[1];
            let regex = new RegExp(char, 'g');
            username = username.replace(regex, '*');
            console.log(username);
        } else if (command === 'Check') {
            let char = tokens[1];

            if (username.includes(char)) {
                console.log('Valid');
            } else {
                console.log(`Your username must contain ${char}.`);
            }
        }
    }
}

// solve([ 'Pesho',
//         'Case lower',
//         'Cut ES',
//         'Check @',
//         'Sign up' ]
// );

solve(
    [ 'ThisIsMyString',
      'Reverse 1 4',
      'Replace i',
      'Cut My',
      'Sign up']
);