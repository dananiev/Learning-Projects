function numberFrom1ToNWith3Steps(input) {
    let num = +input.shift();

    for (let i = 1; i <= num; i += 3) {
        console.log(i);
    }
}

numberFrom1ToNWith3Steps([10]);