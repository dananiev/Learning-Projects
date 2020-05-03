function ToyShop(input) {
    let excursionPrice = +input.shift();
    let puzzles = +input.shift();
    let talkingDolls = +input.shift();
    let teddyBears = +input.shift();
    let minions = +input.shift();
    let trucks = +input.shift();
    let sum = (puzzles * 2.60) + (talkingDolls * 3) + (teddyBears * 4.10) + (minions * 8.20) + (trucks * 2);
    let numberOfToys = puzzles + talkingDolls + teddyBears + minions + trucks;
    let discount = 0.0;

    if (numberOfToys >= 50) {
        discount = sum * 0.25;
    }

    let totalPrice = sum - discount;
    totalPrice = totalPrice - (totalPrice * 0.10);

    if (excursionPrice <= totalPrice) {
        let result = totalPrice - excursionPrice;
        console.log(`Yes! ${result.toFixed(2)} lv left.`);
    } else {
        let result = Math.abs(excursionPrice - totalPrice);
        console.log(`Not enough money! ${result.toFixed(2)} lv needed.`);
    }
}

ToyShop([40.8, 20, 25, 30, 50, 10]);