function third(input) {
    let stage = input.shift();
    let ticketType = input.shift();
    let ticketCount = +input.shift();
    let picture = input.shift();
    
    let price = 0;

    if (stage == 'Final') {
        if (ticketType == 'Standard') {
            price = 110.10;
        } else if (ticketType == 'Premium'){
            price = 160.66;
        } else {
            price = 400;
        }
    } else if (stage == 'Semi final') {
        if (ticketType == 'Standard') {
            price = 75.88;
        } else if (ticketType == 'Premium'){
            price = 125.22;
        } else {
            price = 300.40;
        }
    } else {
        if (ticketType == 'Standard') {
            price = 55.50;
        } else if (ticketType == 'Premium'){
            price = 105.20;
        } else {
            price = 118.90;
        }
    }

    let sum = ticketCount * price;

    if (sum > 4000) {
        sum = sum * 0.75;
    } else if (sum > 2500) {
        sum = sum * 0.90;
        if (picture == 'Y') {
            sum += 40 * ticketCount;
        }
    } else {
        if (picture == 'Y') {
            sum += 40 * ticketCount;
        }
    }
    console.log(sum.toFixed(2));
}

third(['Semi final',
    'VIP',
    9,
    'Y']);