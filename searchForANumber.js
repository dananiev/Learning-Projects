function searchForANumber(arrOne, arrTwo) {

    let arrayOne = arrOne;
    let arrayTwo = arrTwo;
    let lookingForThatNumber = arrayTwo[2];
    let counter = 0;

    arrayOne = arrayOne.splice(0, arrayTwo[0]);

    for (let i = 0; i < arrayTwo[1]; i += 1) {
        arrayOne.shift();
    }

    for (let i = 0; i < arrayOne.length; i += 1) {
        if (lookingForThatNumber === arrayOne[i]) {
            counter += 1;
            console.log('Number ' + lookingForThatNumber + ' ' + 'occurs ' + counter + ' ' + 'time.');
        }
    }
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);