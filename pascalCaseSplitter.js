function pascalCaseSplitter(text) {

    const isUppercase = (symbol) => {
        return symbol.toUpperCase() === symbol;
    }

    let words = [];

    let currentWord = text[0];

    for (let i = 1; i < text.length; i += 1) {
        if (isUppercase(text[i])) {
            words.push(currentWord);
            currentWord = text[i];
        } else {
            currentWord += text[i];
        }
    }

    words.push(currentWord);

    console.log(words.join(', '));

}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');