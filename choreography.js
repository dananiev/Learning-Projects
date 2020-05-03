function choreography(input) {
    let steps = +input.shift();
    let dancers = +input.shift();
    let days = +input.shift();

    let stepsPerDay = Math.ceil(1 * 100 / days);
    let procent = stepsPerDay / dancers;

    if (stepsPerDay <= 13) {
        console.log(`Yes, they will succeed in that goal! ${procent.toFixed(2)}%.`);
    } else {
        console.log(`No, they will not succeed in that goal! Required ${procent.toFixed(2)}% steps to be learned per day.`);
    }
}

choreography([10464, 20, 20]);