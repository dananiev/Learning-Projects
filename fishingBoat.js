function fishingBoat(input) {
    let budget = +input.shift();
    let season = input.shift();
    let numberOfFisherMans = +input.shift();

    let price = 0;
    let finalCurrentPrice = 0;

    switch(season) {
        case 'Spring':
            price = 3000;
            break;
        case 'Summer':
            price = 4200;
            break;
        case 'Autumn':
            price = 4200;
            break;
        case 'Winter':
            price = 2600;
            break;
    }

    if (numberOfFisherMans <= 6) {
        price = price - (price * 0.10);
    } else if (numberOfFisherMans >= 7 && numberOfFisherMans <= 11) {
        price = price - (price * 0.15);
    } else {
        price = price - (price * 0.25);
    }

    if (numberOfFisherMans % 2 === 0 && season !== 'Autumn') {
        finalCurrentPrice = price - (price * 0.05)
    } else {
        finalCurrentPrice = price;
    }

    let levaLeft = budget - finalCurrentPrice;
    let levaOshte = finalCurrentPrice - budget;

    if (budget >= finalCurrentPrice) {
        console.log(`Yes! You have ${levaLeft.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${levaOshte.toFixed(2)} leva.`);
    }
}

fishingBoat([3600, 'Autumn', 6]);