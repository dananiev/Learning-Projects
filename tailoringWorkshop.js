function tailoringWorkshop(input) {
    let tables = +input.shift();
    let length = +input.shift();
    let width = +input.shift();

    let areaCover = tables * (length + 2 * 0.30) * (width + 2 * 0.30);
    //console.log(areaCover);
    let areaBox = tables * (length / 2) * (length / 2);
    //console.log(areaBox);

    let priceUSD = areaCover * 7 + areaBox * 9;
    let priceInLeva = priceUSD * 1.85;
    console.log(`${priceUSD.toFixed(2)} USD`); 
    console.log(`${priceInLeva.toFixed(2)} BGN`);
}

tailoringWorkshop([5, 1.00, 0.50]);