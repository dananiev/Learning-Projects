function revealWords(searchedWord, text) {

    let words = searchedWord.split(', ');

    words.forEach((word) => {
        text = text.replace('*'.repeat(word.length), word);
    });

    console.log(text);    
}

revealWords('great', 'softuni is ***** place for learning new programming languages');