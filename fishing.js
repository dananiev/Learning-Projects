function fishing(input) {
    let n = +input.shift();

    let income = 0;
    let spend = 0;
    let count = 0;

    let name = input.shift();

    while (name !== 'Stop') {
        let kg = +input.shift();
        count += 1;

        let sum = 0;
        let price = 0;

        for (let i = 0; i < name.length; i += 1) {
            let value = name.charCodeAt(i);
            sum += value;
        }

        price = sum / kg;

        if (count % 3 === 0) {
            income += price;
        } else {
            spend += price;
        }

        if (count == n) {
            console.log('Lyubo fulfilled the quota!');
        }
        name = input.shift();
    }

    let result = income - spend;

    if (result >= 0) {
        console.log(`Lyubo's profit from ${count} fishes is ${result.toFixed(2)} leva.`);
    } else {
        console.log(`Lyubo lost ${Math.abs(result).toFixed(2)} leva today.`);
    }
}

fishing([3, 'catfish', 70, 'carp', 20, 'tench', 14]);