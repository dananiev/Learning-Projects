function divideWithoutRemainder(input) {
    let n = +input.shift();
    let p1 = 0;
    let p2 = 0;
    let p3 = 0;

    let p1sum = 0;
    let p2sum = 0;
    let p3sum = 0;

    for (let i = 0; i < n; i += 1) {
        let num = +input.shift();

        if (num % 2 === 0) {
            p1 += 1;
        } 

        if (num % 3 === 0) {
            p2 += 1;
        }

        if (num % 4 === 0) {
            p3 += 1;
        }
    }

    p1sum = p1 / n * 100;
    p2sum = p2 / n * 100;
    p3sum = p3 / n * 100;

    console.log(p1sum.toFixed(2) + '%');
    console.log(p2sum.toFixed(2) + '%');
    console.log(p3sum.toFixed(2) + '%');
}   

divideWithoutRemainder([10, 680, 2, 600, 200, 800, 799, 199, 46, 128, 65]);