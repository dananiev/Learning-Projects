function smallestTwoNumbers(input) {

    let sortedInAscending = input.sort((a, b) => {
        return a - b;
    });

    let result = sortedInAscending.slice(0, 2);

    console.log(result.join(' '));

}

smallestTwoNumbers([30, 15, 50, 5]);