function sorting(arr) {

    let array = arr.sort((a, b) => b - a);

    let ourArray = [];

    while (array.length > 0) {
        ourArray.push(array.shift());
        ourArray.push(array.pop());
    }

    console.log(ourArray.join(' '));

}

sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);