function vacation(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {

    let price = 0;

    if (typeOfTheGroup === 'Students') {
        if (dayOfTheWeek === 'Friday') {
            price = 8.45;
        } else if (dayOfTheWeek === 'Saturday') {
            price = 9.80;
        } else if (dayOfTheWeek === 'Sunday') {
            price = 10.46;
        }
    } else if (typeOfTheGroup === 'Business') {
        if (dayOfTheWeek === 'Friday') {
            price = 10.90;
        } else if (dayOfTheWeek === 'Saturday') {
            price = 15.60;
        } else if (dayOfTheWeek === 'Sunday') {
            price = 16;
        }
    } else if (typeOfTheGroup === 'Regular') {
        if (dayOfTheWeek === 'Friday') {
            price = 15;
        } else if (dayOfTheWeek === 'Saturday') {
            price = 20;
        } else if (dayOfTheWeek === 'Sunday') {
            price = 22.50;
        }
    }

    if (typeOfTheGroup === 'Business') {

    }

    let totalPrice = groupOfPeople * price;

    if (typeOfTheGroup === 'Students' && groupOfPeople >= 30) {
        totalPrice *= 0.85;
    } else if (typeOfTheGroup === 'Business' && groupOfPeople >= 100) {
        totalPrice = totalPrice - (price * 10);
    } else if (typeOfTheGroup === 'Regular' && (groupOfPeople >= 10 && groupOfPeople <= 20)) {
        totalPrice *= 0.95;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);

}

vacation(40, 'Regular', 'Saturday');