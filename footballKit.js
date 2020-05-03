function footballKit(input) {
    let priceOfTshirt = +input.shift();
    let totalSumForBall = +input.shift();

    let priceOfShorts = 0.75 * priceOfTshirt;
    let priceOfSocks = 0.20 * priceOfShorts;
    let priceOfShoes = 2 * (priceOfTshirt + priceOfShorts);

    let totalSum = priceOfShoes + priceOfShorts + priceOfSocks + priceOfTshirt; 
    let discount = 0.15 * totalSum;
    let finalSum = totalSum - discount;
    let difference = totalSumForBall - finalSum;

    if (finalSum >= totalSumForBall) {
        console.log('Yes, he will earn the world-cup replica ball!');
        console.log(`His sum is ${finalSum.toFixed(2)} lv.`);
    } else {
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${difference.toFixed(2)} lv. more.`);
    }
}

footballKit([25, 100]);