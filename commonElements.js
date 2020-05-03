function commonElements(arr1, arr2) {

    let arrayOne = arr1;
    let arrayTwo = arr2;

    for (let i = 0; i < arrayOne.length - 1; i += 1) {
        for (let j = 0; j < arrayTwo.length - 1; j += 1) {
            if (arrayOne[i] === arrayTwo[j]) {
                console.log(arrayOne[i]);
            }
        }
    }
}

commonElements(
    ['Hey', 'hello', 2, 4, 'Pesho', 'e'],
    ['Pecho', 10, 'hey', 4, 'hello', 2]
);