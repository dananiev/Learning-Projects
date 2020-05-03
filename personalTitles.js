function personalTitles(input) {
    let age = +input.shift();
    let gender = input.shift();

    if (age >= 16 && gender === 'm') {
        console.log('Mr.');
    } else if (age >= 16 && gender === 'f'){
        console.log('Ms.');
    }

    if (age < 16 && gender === 'm') {
        console.log('Master');
    } else if (age < 16 && gender === 'f') {
        console.log('Miss');
    }
}

personalTitles([12, 'f']);