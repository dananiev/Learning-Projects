function easterCozonacs(input) {

    let budget = Number(input[0]);
    let pricePerKGFlour = Number(input[1]);

    const priceOfPackEggs = 0.75 * pricePerKGFlour;
    const priceQuarterLiterMilk = (pricePerKGFlour + (pricePerKGFlour * 0.25)) / 4;
    const cozonakPrice = priceOfPackEggs + pricePerKGFlour + priceQuarterLiterMilk;
    let cozonaks = 0;
    let colouredEggs = 0;

    while (budget >= cozonakPrice) {
        budget -= cozonakPrice;
        cozonaks += 1;
        colouredEggs += 3;

        if (cozonaks % 3 === 0) {
            colouredEggs -= (cozonaks - 2);
        }
    }

    console.log(`You made ${cozonaks} cozonacs! Now you have ${colouredEggs} eggs and ${budget.toFixed(2)}BGN left.`);

}

easterCozonacs([ '20.50', '1.25' ]);