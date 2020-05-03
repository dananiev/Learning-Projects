function tripToWorldCup(input) {
    let priceOfTicketDeparture = +input.shift();
    let priceOfTicketArrival = +input.shift();
    let priceOfTicketForOneMatch = +input.shift();
    let matches = +input.shift();
    let discount = +input.shift();
    let friends = 6;

    let sumOfAirplaneTickets = friends * (priceOfTicketDeparture + priceOfTicketArrival);
    let discountPrice = sumOfAirplaneTickets - (discount / 100) * sumOfAirplaneTickets;

    let sumOfMatchesTickets = (friends * matches) * priceOfTicketForOneMatch;
    let sum = discountPrice + sumOfMatchesTickets;
    let separateSum = sum / friends;

    console.log(`Total sum: ${sum.toFixed(2)} lv.`);
    console.log(`Each friend has to pay ${separateSum.toFixed(2)} lv.`);
}

tripToWorldCup([175, 280, 125, 5, 15]);