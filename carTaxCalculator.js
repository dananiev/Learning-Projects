function carTaxCalculator(number) {

    let tax = number;
    let carTax = 0;

    if (tax < 37) {
        carTax = tax * 0.43;
    } else if (tax > 37 && tax < 55) {
        carTax = tax * 0.50;
    } else if (tax > 55 && tax < 74) {
        carTax = tax * 0.68;
    } else if (tax > 74 && tax < 110) {
        carTax = tax * 1.38;
    } else if (tax > 110) {
        carTax = tax * 1.54;
    }

    console.log(carTax.toFixed(2) + ' ' + 'lv.');
}

carTaxCalculator(57.50);