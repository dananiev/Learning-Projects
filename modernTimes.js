function modernTimes(text) {

    text.split(' ').forEach((word) => {
        let pattern = /#[A-Za-z]+/g;

        if (pattern.test(word)) {
            console.log(word.slice(1));
        }
    });

}

modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia');