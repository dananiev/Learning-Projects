function countStringOccurences(text, search) {

    let words = text.split(' ');
    let counter = 0;

    for (let word of words) {
        if (word === search) {
            counter += 1;
        }
    }
    console.log(counter);
}

countStringOccurences('This is a word and it also is a sentence', 'is');