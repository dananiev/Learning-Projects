function solve(arr) {
    aggregate(arr, 0, (a, b) => a + b);
    aggregate(arr, 0, (a, b) => a + 1 / b);
    aggregate(arr, '', (a, b) => a + b);

    function aggregate(arr, initVal, func) {
        let val = initVal;
        for (let i = 0; i < arr.length; i += 1) {
            val = func(val, arr[i]);
        }
        console.log(val);
    }
}

solve([1, 2, 3]);