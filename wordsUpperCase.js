function solve(string) {

    let str = string.toUpperCase();
    let words = extractWords();
    words = words.filter(w => w != '');
    return words.join(', ');

    function extractWords() {
        return str.split(/\W+/);
    }

}

console.log(solve('Hi, how are you?'));
//solve('Hi, how are you?');