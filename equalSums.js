function equalSums(arr) {

    let array = arr;

    let sumFirst = 0;
    let sumReverse = 0;

    for (let i = 0; i < array.length; i += 1) {
        sumReverse = 0;
        sumFirst += +array[i];
        for (let j = 0; j < array.length - i; j += 1) {
            let currentEl = array[array.length - 1 - j];
            sumReverse += currentEl;
        }

        if (sumFirst === sumReverse) {
            console.log(i);
            return;
        }
    }
    console.log('no');
}

equalSums([1, 2, 3, 3]);