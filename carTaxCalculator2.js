function solve(type, kW, age) {
    let baseTax = calculateBaseTax(kW);
    let carCoefficient = calculateCoefficient(age);

    let totalTax = baseTax * carCoefficient;
    console.log(totalTax.toFixed(2) + ' lv.');

    function calculateBaseTax(kW) {
        let tax = 0;

        if (kW <= 37) {
            tax = kW * 0.43;
        } else if (kW > 37 && kW <= 55) {
            tax = kW * 0.50;
        } else if (kW > 55 && kW <= 74) {
            tax = kW * 0.68;
        } else if (kW > 74 && kW <= 110) {
            tax = kW * 1.38;
        } else if (kW > 110) {
            tax = kW * 1.54;
        }
        return tax;
    }

    function calculateCoefficient(age) {

        if (age < 5) {
            return 2.80;
        } else if (5 <= age && age < 14) {
            return 1.50;
        } return 1;
    }
}

solve('motorcycle', 450, 10);