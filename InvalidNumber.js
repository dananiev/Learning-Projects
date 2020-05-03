function InvalidNumber(input) {
    let number = +input.shift();

    if (!((number >= 100 && number <= 200) || number === 0)) {
        console.log('invalid');
    }
}

InvalidNumber([75]);