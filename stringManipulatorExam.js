function solve(input) {

    let string = input.shift();

    let translateArrPart = input[0].split(' ');
    let char = translateArrPart[1];
    let replace = translateArrPart[2];
    let regex = new RegExp(char, 'g');
    let str = string.replace(regex, replace);
    console.log(str);


    let inc = input[1].split(' ');
    if (str.includes(inc[1])) {
        console.log('True');
    } else {
        console.log('False');
    }

    let lookingForStart = input[2].split(' ');
    let elOfString = str.split(' ');
    if (lookingForStart[1] === elOfString[0]) {
        console.log('True');
    } else {
        console.log('False');
    }

    let lowerCasedString = str.toLowerCase();
    console.log(lowerCasedString);

    let findIndex = input[4].split(' ');
    let neededIndex = findIndex[1];

    let lastInd = lowerCasedString.lastIndexOf(neededIndex);
    console.log(lastInd);

    let removed = input[5].split(' ');
    let count = removed[2];
    let result = lowerCasedString.substr(count);
    console.log(result);

    for (let line of input) {
        if (line === 'End') {
            break;
        }
    }

}

solve(
    [ '//Thi5 I5 MY 5trING!//',
      'Translate 5 s',
      'Includes string',
      'Start //This',
      'Lowercase',
      'FindIndex i',
      'Remove 0 10',
      'End' ]
);