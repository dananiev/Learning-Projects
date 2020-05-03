function mergeArrays(arr1, arr2) {

    let arrayOne = arr1;
    let arrayTwo = arr2;
    let sum = 0;
    let str = '';
    let newArr = [];

    for (let i = 0; i < arrayOne.length; i += 1) {
        if (i % 2 === 0) {
            sum = +arrayOne[i] + +arrayTwo[i];
            newArr.push(sum);
        } else {
            str = arrayOne[i] + arrayTwo[i];
            newArr.push(str);
        }
    }
    console.log(newArr.join(' - '));
}

mergeArrays(
    ['5', '15', '23', '56', '35'],
    ['17', '22', '87', '36', '11']
);