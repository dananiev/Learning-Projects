function repeatString(string, number) {

    let result = '';

    for (let i = 0; i < number; i += 1) {
        result += string;
    }
    console.log(result);
}

repeatString('abc', 3);