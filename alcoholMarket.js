function alcoholMarket(input) {
    let priceOfWhiskey = +input.shift();
    let beerLiters = +input.shift();
    let wineLiters = +input.shift();
    let rakiaLiters = +input.shift();
    let whiskeyLiters = +input.shift();

    let priceOfRakia = priceOfWhiskey / 2;
    let priceOfWine = priceOfRakia - (0.4 * priceOfRakia);
    let priceOfBeer = priceOfRakia - (0.8 * priceOfRakia);

    let sumOfBeer = beerLiters * priceOfBeer;
    let sumOfWine = wineLiters * priceOfWine;
    let sumOfRakia = rakiaLiters * priceOfRakia;
    let sumOfWhiskey = whiskeyLiters * priceOfWhiskey;

    let sum = sumOfBeer + sumOfRakia + sumOfWine + sumOfWhiskey;
    console.log(sum.toFixed(2));
}

alcoholMarket([50, 10, 3.5, 6.5, 1]);