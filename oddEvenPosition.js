function oddEvenPosition(input) {
    let n = +input.shift();
    let oddSum = 0.0;
    let oddMin = 1000000.0;
    let oddMax = -1000000.0;
    let evenSum = 0.0;
    let evenMin = 1000000.0;
    let evenMax = -1000000.0;

    for (let i = 1; i <= n; i += 1) {

        let num = +input.shift();

        if (i % 2 != 0) {
            oddSum += num;
            if (num > oddMax) {
                oddMax = num;
            }
            if (num < oddMin) {
                oddMin = num;
            }
        } else {
            evenSum += num;
            if (num > evenMax) {
                evenMax = num;
            }
            if (num < evenMin) {
                evenMin = num;
            }
        }
    }

    if (n === 0) {
        console.log('OddSum=' + oddSum.toFixed(2) + ',');
        console.log('OddMin=No' + ',');
        console.log('OddMax=No' + ',');
        console.log('EvenSum=' + evenSum.toFixed(2) + ',');
        console.log('EvenMin=No' + ',');
        console.log('EvenMax=No');
    } else if (n === 1) {
        console.log('OddSum=' + oddSum.toFixed(2) + ',');
        console.log('OddMin=' + oddMin.toFixed(2) + ',');
        console.log('OddMax=' + oddMax.toFixed(2) + ',');
        console.log('EvenSum=' + evenSum.toFixed(2) + ',');
        console.log('EvenMin=No' + ',');
        console.log('EvenMax=No');
    } else {
        console.log('OddSum=' + oddSum.toFixed(2) + ',');
        console.log('OddMin=' + oddMin.toFixed(2) + ',');
        console.log('OddMax=' + oddMax.toFixed(2) + ',');
        console.log('EvenSum=' + evenSum.toFixed(2) + ',');
        console.log('EvenMin=' + evenMin.toFixed(2) + ',');
        console.log('EvenMax=' + evenMax.toFixed(2));
    }
}

oddEvenPosition([6, 2, 3, 5, 4, 2, 1]);