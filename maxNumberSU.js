function maxNumberSU(arr) {

    let topIntegers = [];

    for (let i = 0; i < arr.length; i += 1) {
        let currentElement = arr[i];
        let isTopIntegers = true;

        for (let j = i + 1; j < arr.length; j += 1) {
            if (currentElement <= arr[j]) {
                isTopIntegers = false;
                break;
            }
        }

        if (isTopIntegers) {
            topIntegers.push(currentElement);
        }
    }

    console.log(topIntegers.join(' '));
}

maxNumberSU([1, 4, 3, 2]);