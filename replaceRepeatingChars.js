function replaceRepeatingChars(text) {

    let output = text[0];

    for (let i = 1; i < text.length; i += 1) {
        let current = text[i];
        let previous = text[i - 1];

        if (current !== previous) {
            output += current;
        }
    }

    console.log(output);

}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');