function gladiatorExpenses(fights, helmetP, swordP, shieldP, armorP) {

    let lostFightsCount = fights;
    let helmetPrice = helmetP;
    let swordPrice = swordP;
    let shieldPrice = shieldP;
    let armorPrice = armorP;

    let totalExpenses = 0;

    for (let i = 1; i <= lostFightsCount; i += 1) {
        if (i % 2 === 0) {
            totalExpenses += helmetPrice;
        }
        if (i % 3 === 0) {
            totalExpenses += swordPrice;
        }
        if (i % 6 === 0) {
            totalExpenses += shieldPrice;
        }
        if (i % 12 === 0) {
            totalExpenses += armorPrice;
        }
    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`);
}

gladiatorExpenses(7, 2, 3, 4, 5);