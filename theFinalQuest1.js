function solve(input) {

    let words = input
        .shift()
        .split(' ');

    for (let line of input) {
        
        if (line === 'Stop') {
            break;
        }

        let tokens = line.split(' ');
        let command = tokens[0];

        if (command === 'Delete') {
            let deleteIndex = Number(tokens[1]);

            deleteWord(deleteIndex);
        } else if (command === 'Swap') {
            let firstWord = tokens[1];
            let secondWord = tokens[2];

            swap(firstWord, secondWord);
        } else if (command === 'Put') {
            let givenWord = tokens[1];
            let givenIndex = Number(tokens[2]);

            put(givenWord, givenIndex);
        } else if (command === 'Sort') {
            words.sort(sortByDescending);
        } else {
            let wordOne = tokens[1];
            let wordTwo = tokens[2];

            replace(wordOne, wordTwo);
        }
    }

    console.log(words.join(' '));


    function deleteWord(index) {
        if (index >= 0 && index < words.length) {
            words.splice(index + 1, 1);
        }
    }

    function swap(word1, word2) {
        let indexOfFirstWord = words.indexOf(word1);
        let indexOfSecondWord = words.indexOf(word2);

        if (indexOfFirstWord !== -1 && indexOfSecondWord !== -1) {
            words[indexOfFirstWord] = word2;
            words[indexOfSecondWord] = word1;
        }
    }

    function put(word, index) {
        index -= 1;

        if (index >= 0 && index <= words.length) {
            words.splice(index, 0, word);
        }
    }

    function sortByDescending(a, b) {
        return b.localeCompare(a);
    }

    function replace(word1, word2) {
        let indexOfSecondWord = words.indexOf(word2);

        if (indexOfSecondWord >= 0 && indexOfSecondWord <= words.length) {
            words[indexOfSecondWord] = word1;
        }
    }
}

solve(
    [ 'Congratulations! You last also through the have challenge!',
      'Swap have last',
      'Replace made have',
      'Delete 2',
      'Put it 4',
      'Stop',
      '' ]
);