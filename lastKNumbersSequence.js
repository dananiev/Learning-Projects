function lastKNumberSequence(n, k) {

    let result = [1];

    for (let i = 1; i < n; i += 1) {
        let index = i - k;
        if (index < 0) {
            index = 0;
        }

        let subArr = result.slice(index);

        let sum = 0;
        for (let element of subArr) {
            sum += element;
        }

        result.push(sum);
    }

    console.log(result.join(' '));
}

lastKNumberSequence(6, 3);