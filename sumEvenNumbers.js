function sumEvenNumbers(arr) {

    let array = arr;
    let sum = 0;

    for (let i = 0; i < array.length; i += 1) {
        let numbers = +arr[i];

        if (numbers % 2 === 0) {
            sum += numbers;
        }
    }

    console.log(sum);

}

sumEvenNumbers(['1', '2', '3', '4', '5', '6']);