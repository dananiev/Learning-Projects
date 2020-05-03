function sushiTime(input) {
    let sushiType = input.shift();
    let restaurantName = input.shift();
    let mealsCount = +input.shift();
    let order = input.shift();

    let price = 0;
    let discount = 0;
    let difference = 0;
    let sum = 0;

    if (restaurantName === 'Sushi Zone') {
        if (sushiType === 'sashimi') {
            price = mealsCount * 4.99;
        } else if (sushiType === 'maki') {
            price = mealsCount * 5.29;
        } else if (sushiType === 'uramaki') {
            price = mealsCount * 5.99;
        } else if (sushiType === 'temaki') {
            price = mealsCount * 4.29;
        }

        if (order === 'Y') {
            discount = price * 0.80;
            difference = price - discount;
        }
        sum = price + difference;
        console.log(`Total price: ${Math.ceil(sum)} lv.`);

    } else if (restaurantName === 'Sushi Time') {
        if (sushiType === 'sashimi') {
            price = mealsCount * 5.49;
        } else if (sushiType === 'maki') {
            price = mealsCount * 4.69;
        } else if (sushiType === 'uramaki') {
            price = mealsCount * 4.49;
        } else if (sushiType === 'temaki') {
            price = mealsCount * 5.19;
        }

        if (order === 'Y') {
            discount = price * 0.80;
            difference = price - discount;
        }
        sum = price + difference;
        console.log(`Total price: ${Math.ceil(sum)} lv.`);

    } else if (restaurantName === 'Sushi Bar') {
        if (sushiType === 'sashimi') {
            price = mealsCount * 5.25;
        } else if (sushiType === 'maki') {
            price = mealsCount * 5.55;
        } else if (sushiType === 'uramaki') {
            price = mealsCount * 6.25;
        } else if (sushiType === 'temaki') {
            price = mealsCount * 4.75;
        }

        if (order === 'Y') {
            discount = price * 0.80;
            difference = price - discount;
        }
        sum = price + difference;
        console.log(`Total price: ${Math.ceil(sum)} lv.`);

    } else if (restaurantName === 'Asian Pub') {
        if (sushiType === 'sashimi') {
            price = mealsCount * 4.50;
        } else if (sushiType === 'maki') {
            price = mealsCount * 4.80;
        } else if (sushiType === 'uramaki') {
            price = mealsCount * 5.50;
        } else if (sushiType === 'temaki') {
            price = mealsCount * 5.50;
        }

        if (order === 'Y') {
            discount = price * 0.80;
            difference = price - discount;
        }
        sum = price + difference;
        console.log(`Total price: ${Math.ceil(sum)} lv.`);
        
    } else {
        console.log(`${restaurantName} is invalid restaurant!`);
    }
}

sushiTime(['sashimi',
    'SASA',
    3,
    'Y']);