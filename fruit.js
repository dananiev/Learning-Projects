function solve(a, x, y) {
    let kg = x / 1000;
    let moneyy = y * kg;

    console.log(`I need $${moneyy.toFixed(2)} to buy ${kg.toFixed(2)} kilograms ${a}.`);
}

solve('orange', 2500, 1.80);