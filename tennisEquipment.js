function first(input) {
    let priceTennis = +input.shift();
    let countTennis = +input.shift();
    let countShoes = +input.shift();

    let amountTennis = countTennis * priceTennis;
    let priceShoe = priceTennis / 6;
    let AmountShoes = priceShoe * countShoes;
    let otherEquipment = (amountTennis + AmountShoes) * 0.2;
    let total = amountTennis + AmountShoes + otherEquipment;
    let priceDjokovic = total / 8;
    let sponsors = total * 7 / 8;

    console.log(`Price to be paid by Djokovic ${Math.floor(priceDjokovic)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(sponsors)}`);

}

first([850, 4, 2]);