function histogram(input) {
    let n = +input.shift();

    let p1 = 0;
    let p2 = 0;
    let p3 = 0;
    let p4 = 0;
    let p5 = 0;

    let p1sum = 0;
    let p2sum = 0;
    let p3sum = 0;
    let p4sum = 0;
    let p5sum = 0;

    for (let i = 1; i <= n; i += 1) {
        let numbers = +input.shift();

        if (numbers < 200) {
            p1 += 1;
        } else if (numbers >= 200 && numbers < 400) {
            p2 += 1;
        } else if (numbers >= 400 && numbers < 600) {
            p3 += 1;
        } else if (numbers >= 600 && numbers < 800) {
            p4 += 1;
        } else if (numbers >= 800) {
            p5 += 1;
        }
    }

    p1sum = p1 / n * 100;
    p2sum = p2 / n * 100;
    p3sum = p3 / n * 100;
    p4sum = p4 / n * 100;
    p5sum = p5 / n * 100;

    console.log(p1sum.toFixed(2) + '%');
    console.log(p2sum.toFixed(2) + '%');
    console.log(p3sum.toFixed(2) + '%');
    console.log(p4sum.toFixed(2) + '%');
    console.log(p5sum.toFixed(2) + '%');

}

histogram([3, 1, 2, 999]);