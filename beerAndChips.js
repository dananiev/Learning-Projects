function beerAndChips(input) {
    let name = input.shift();
    let budget = +input.shift();
    let beers = +input.shift();
    let chips = +input.shift();

    let priceOfBeer = 1.20;
    let beerCosts = beers * priceOfBeer;
    let priceOfChips = 0.45 * beerCosts;
    let chipsCosts = Math.ceil(priceOfChips * chips);
    let sum = beerCosts + chipsCosts;
    let sumLeft = Math.abs(budget - sum);
    
    if (budget >= sum) {
        console.log(`${name} bought a snack and has ${sumLeft.toFixed(2)} leva left.`);
    } else {
        console.log(`${name} needs ${sumLeft.toFixed(2)} more leva!`);
    }
}

beerAndChips(['George', 10, 2, 3]);