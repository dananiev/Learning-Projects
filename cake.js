function cake(input) {
    let width = +input.shift();
    let length = +input.shift();

    let cakeSize = width * length;

    for (let i = cakeSize; i > -1; i = cakeSize) {
        let pieces = input.shift();
        if (pieces === 'STOP') {
            console.log(`${cakeSize} pieces are left.`);
            return;
        }
        let pieces2 = +pieces;
        cakeSize = cakeSize - pieces2;
    }
    console.log('No more cake left! You need' + ' ' + Math.abs(cakeSize) + ' ' + 'pieces more.');
}

cake([10, 2, 2, 4, 6, 'STOP']);