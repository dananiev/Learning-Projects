function stadium(input) {
    let sectors = +input.shift();
    let capacityOfTheStadium = +input.shift();
    let priceOfTicket = +input.shift();

    let prihodiOtEdinSektor = (capacityOfTheStadium * priceOfTicket) / sectors;
    let obshtaPechalba = sectors * prihodiOtEdinSektor;
    let pari = obshtaPechalba - (0.75 * prihodiOtEdinSektor);
    let pariZaBlagotvoritelnost = pari / 8;

    console.log(`Total income - ${obshtaPechalba.toFixed(2)} BGN`);
    console.log(`Money for charity - ${pariZaBlagotvoritelnost.toFixed(2)} BGN`);
}

stadium([4, 5000, 5]);