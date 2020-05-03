function reverseAnArrayOfStrings(arr) {

    let array = arr;

    for (let i = 0; i < array.length / 2; i += 1) {
        let lowerElement = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = lowerElement;
    }

    console.log(arr.join(' '));

}

reverseAnArrayOfStrings(['a', 'b', 'c', 'd', 'e']);