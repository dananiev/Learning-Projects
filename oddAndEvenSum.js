function oddAndEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;

    let myNumber = number.toString().split('').map(Number);

    for (let i = 0; i < myNumber.length; i += 1) {
        let currentElement = myNumber[i];

        if (currentElement % 2 === 0) {
            evenSum += currentElement;
        } else {
            oddSum += currentElement;
        }
    }

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);

}

oddAndEvenSum(1000435);