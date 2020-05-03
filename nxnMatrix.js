function nxnMatrix(num) {

    for (let i = 0; i < num; i += 1) {
        let str = num.toString() + ' ';
        console.log(str.repeat(num));
    }
}

nxnMatrix(3);