function lowerToUpper(letter) {
    if (letter >= String.fromCharCode(65) && letter <= String.fromCharCode(90)) {
        console.log('upper-case');
    } else {
        console.log('lower-case');
    }
}

lowerToUpper('f');