function hashTag(text) {

    text.split(' ').forEach((word) => {
        let pattern = /#[A-Za-z]+/g;

        if (pattern.test(word)) {
            console.log(word.substring(1));
        }
    });
}

hashTag('Nowadays everyone uses # to tag a #special word in #socialMedia');