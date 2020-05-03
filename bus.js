function bus(input) {
    let passengers = +input.shift();
    let stops = +input.shift();

    let oddSumPassengers = 0;
    let evenSumPassengers = 0;
    let numberPassengerFinal = 0;

    for (let i = 1; i <= stops * 2; i += 1) {
        let num = +input.shift();

        if (i % 2 === 0) {
            evenSumPassengers = evenSumPassengers + num;
        } else {
            oddSumPassengers = oddSumPassengers + num;
        }
        numberPassengerFinal = passengers + evenSumPassengers - oddSumPassengers;
    }

    if (stops % 2 != 0) {
        numberPassengerFinal = numberPassengerFinal + 2;
    }

    console.log(`The final number of passengers is : ${numberPassengerFinal}`);
}

bus([20, 
    2,
    10,
    5,
    5,
    3]);