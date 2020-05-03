function evenPowersFrom2(input) {
    let num = +input.shift();
    let current = 1;

    for (let i = 0; i <= num; i += 2) {
        console.log(current);
        current = current * 4;
    }
}

evenPowersFrom2([4]);