function equalArrays(arr1, arr2) {

    let arrayOne = arr1.map(Number);
    let arrayTwo = arr2.map(Number);


    for (let i = 0; i < arrayOne.length; i += 1) {
        if (arrayOne[i] !== arrayTwo[i]) {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }   

    let sum = 0;

    for(let i = 0; i < arrayOne.length; i += 1) {
        sum += arrayOne[i];
    }

    console.log(`Arrays are identical. Sum: ${sum}`);
}

equalArrays(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);