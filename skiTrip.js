function skiTrip(input) {
    let days = +input.shift();
    let room = input.shift();
    let rating = input.shift();

    let totalCost = 0;

    switch (room) {
        case 'room for one person':
        if (rating === 'positive') {
            totalCost = (days - 1) * 18 * 1.25;
        } else if (rating === 'negative') {
            totalCost = (days - 1) * 18 * 1.10;
        }
        break;
        case 'apartment':
        if (days < 10) {
            totalCost = ((days - 1) * 25) - ((days - 1) * 25 * 0.30);
        } else if (days >= 10 && days < 15) {
            totalCost = ((days - 1) * 25) - ((days - 1) * 25 * 0.35); 
        } else if (days >= 15) {
            totalCost = ((days - 1) * 25) - ((days - 1) * 25 * 0.50);
        }
        if (rating === 'positive') {
            totalCost = totalCost + (totalCost * 0.25);
        } else if (rating === 'negative') {
            totalCost = totalCost - (totalCost * 0.10);
        }
        break;
        case 'president apartment':
        if (days < 10) {
            totalCost = ((days - 1) * 35) - ((days - 1) * 35 * 0.10);
        } else if (days >= 10 && days < 15) {
            totalCost = ((days - 1) * 35) - ((days - 1) * 35 * 0.15);
        } else if (days >= 15) {
            totalCost = ((days - 1) * 35) - ((days - 1) * 35 * 0.20);
        }
        if (rating === 'positive') {
            totalCost = totalCost + (totalCost * 0.25);
        } else if (rating === 'negative') {
            totalCost = totalCost - (totalCost * 0.10);
        }
        break;
    }
    console.log(totalCost.toFixed(2));
}

skiTrip([12, 'room for one person', 'positive']);