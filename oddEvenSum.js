function oddEvenSum(input) {
    let n = +input[0];
    let odd = 0;
    let even = 0;

    for (let i = 1; i <= n; i += 1) {
        let num = +input[i];
        
        if (i % 2 === 0) {
            even += num;
        } else {
            odd += num;
        }
    }

    let diff = Math.abs(odd - even);
    if (diff == 0) {
        console.log('Yes');
        console.log('Sum = ' + odd);
    } else {
        console.log('No');
        console.log('Diff = ' + diff);
    }
}

oddEvenSum([4, 10, 50, 60, 20]);