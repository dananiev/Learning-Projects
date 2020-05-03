function seaTrip(input) {
    let moneyForFood = +input.shift();
    let moneyForSouvenirs = +input.shift();
    let moneyForHotel = +input.shift();

    let distanceOneWay = 210;
    let totalDistance = distanceOneWay * 2;

    let gasolinLiters = totalDistance / 100 * 7;
    let priceForLiter = 1.85;
    let priceForGasolin = gasolinLiters * priceForLiter;

    let days = 3;
    let totalSumForFood = days * moneyForFood;
    let totalSumForSouvenirs = days * moneyForSouvenirs;
    let totalSum = totalSumForFood + totalSumForSouvenirs;

    let firstDayDiscount = moneyForHotel * 0.9;
    let secondDayDiscount = moneyForHotel * 0.85;
    let thirdDayDiscount = moneyForHotel * 0.80;

    let result = priceForGasolin + totalSum + firstDayDiscount + secondDayDiscount + thirdDayDiscount;
    console.log(`Money needed: ${result.toFixed(2)}`);
}

seaTrip([100, 50, 500]);