function sortNumbersSU(nOne, nTwo, nThree) {
    if (nOne <= nTwo && nTwo <= nThree) {
        console.log(nThree);
        console.log(nTwo);
        console.log(nOne);
    } else if (nOne <= nThree && nThree <= nTwo) {
        console.log(nTwo);
        console.log(nThree);
        console.log(nOne);
    } else if (nTwo <= nOne && nOne <= nThree) {
        console.log(nThree);
        console.log(nOne);
        console.log(nTwo);
    } else if (nTwo <= nThree && nThree <= nOne) {
        console.log(nOne);
        console.log(nThree);
        console.log(nTwo);
    } else if (nThree <= nOne && nOne <= nTwo) {
        console.log(nTwo);
        console.log(nOne);
        console.log(nThree);
    } else if (nThree <= nTwo && nTwo <= nOne) {
        console.log(nOne);
        console.log(nTwo);
        console.log(nThree);
    }
}

sortNumbersSU(2, 1, 3);