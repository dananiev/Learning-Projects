function accountBalance(input) {
    let n = +input.shift();
    let balance = 0.0;
    let counter = 0;

    while (counter < n) {
        let amount = +input.shift();

        if (amount < 0) {
            console.log('Invalid operation!');
            break;
        }
        balance += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        counter += 1;
    }

    console.log(`Total: ${balance.toFixed(2)}`);
}

accountBalance([3, 5.51, 69.42, 100]);