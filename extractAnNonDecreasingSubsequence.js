function extractAnNonDecreasingSubsequence(array) {

    array = array.map(Number);
    let result = [];
    let biggest = array[0];

    for (let i = 0; i < array.length; i += 1) {
        if (array[i] >= biggest) {
            result.push(array[i]);
            biggest = array[i];
        }
    }

    console.log(result.join(' '));

}

extractAnNonDecreasingSubsequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);