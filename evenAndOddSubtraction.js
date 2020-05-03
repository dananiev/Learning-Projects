function evenAndOddSubtraction(arr) {

    let array = arr;
    let evenSum = 0;
    let oddSum = 0;

    for (let i = 0; i < array.length; i += 1) {
        let currentNum = arr[i];

        if (currentNum % 2 === 0) {
            evenSum += currentNum;
        } else {
            oddSum += currentNum;
        }
    }

    let difference = evenSum - oddSum;
    console.log(difference);

}

evenAndOddSubtraction([1, 2, 3, 4, 5, 6]);