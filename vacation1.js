function vacation1(groupOfPeople, typeOfTheGroup, dayOfTheWeek) {
    let price = 0;

    if (typeOfTheGroup === 'Students') {
        if (dayOfTheWeek === 'Friday') {
            price = groupOfPeople * 8.45;
        } else if (dayOfTheWeek === 'Saturday') {
            price = groupOfPeople * 9.80;
        } else if (dayOfTheWeek === 'Sunday') {
            price = groupOfPeople * 10.46;
        }
    } else if (typeOfTheGroup === 'Business') {
        if (dayOfTheWeek === 'Friday') {
            price = groupOfPeople * 10.90;
        } else if (dayOfTheWeek === 'Saturday') {
            price = groupOfPeople * 15.60;
        } else if (dayOfTheWeek === 'Sunday') {
            price = groupOfPeople * 16;
        }
    } else if (typeOfTheGroup === 'Regular') {
        if (dayOfTheWeek === 'Friday') {
            price = groupOfPeople * 15;
        } else if (dayOfTheWeek === 'Saturday') {
            price = groupOfPeople * 20;
        } else if (dayOfTheWeek === 'Sunday') {
            price = groupOfPeople * 22.50;
        }
    }

    let discount = 0;

    if (typeOfTheGroup === 'Students' && groupOfPeople >= 30) {
        discount = price * 0.85;
    } else if (typeOfTheGroup === 'Business' && groupOfPeople >= 100) {
        if (dayOfTheWeek === 'Friday') {
            discount = price - (10 * 10.90);
        } else if (dayOfTheWeek === 'Saturday') {
            discount = price - (10 * 15.60);
        } else if (dayOfTheWeek === 'Sunday') {
            discount = price - (10 * 16);
        }
    } else if (typeOfTheGroup === 'Regular' && (groupOfPeople >= 10 && groupOfPeople <= 20)) {
        discount = price * 0.95;
    } else {
        discount = price;
    }

    console.log(`Total price: ${discount.toFixed(2)}`);
}

vacation1(40, 'Regular', 'Saturday');