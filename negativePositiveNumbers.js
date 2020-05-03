function negativePositiveNumbers(arr) {

    let array = arr;
    let result = [];

    for (let element of array) {
        if (element < 0) {
            result.unshift(element);
        } else if (element >= 0) {
            result.push(element);
        }
    }

    for (let i = 0; i < result.length; i += 1) {
        console.log(result[i]);
    }
}

negativePositiveNumbers([3, -2, 0, -1]);