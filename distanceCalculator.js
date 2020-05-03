function distanceCalculator(input) {

    let stepsIveMade = Number(input.shift()); //5000
    let oneStepInCm = Number(input.shift()); //7.5
    let distanceInM = Number(input.shift()); //500
    let distanceFromMtoCm = distanceInM * 100; //50000
    
    let distanceIveTravelled = 0;


    for (let i = 1; i <= stepsIveMade; i += 1) {

        if (i % 5 === 0) {
            let cal = 0.30 * oneStepInCm;
            let dis = oneStepInCm - cal;
            distanceIveTravelled += dis;
        } else {
            distanceIveTravelled += oneStepInCm;
        }
    }

    let result = (distanceIveTravelled / distanceFromMtoCm) * 100;

    console.log(`You travelled ${result.toFixed(2)}% of the distance!`);
}

//distanceCalculator([ '100', '2', '1' ]);
distanceCalculator([ '5000', '7.5', '500' ]);