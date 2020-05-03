function stringSubstring(word, text) {

    let someTextArr = text.toLowerCase().split(' ');

    if (someTextArr.includes(word)) {
        console.log(word);
    } else {
        console.log(`${word} not found!`);
    }

}

stringSubstring('javascript', 'JavaScript is the best programming language');