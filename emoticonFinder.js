function emoticonFinder(text) {

    text = text.split(' ');

    for (let element of text) {
        if (element.length === 2 && element.startsWith(':')) {
            console.log(element);
        }
    }
}

emoticonFinder('There are so many emoticons nowadays :P I have many ideas :O what input to place here :)');