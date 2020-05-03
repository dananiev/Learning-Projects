function fruitShop(input) {
    let product = (input.shift()).toLowerCase();
    let day = (input.shift()).toLowerCase();
    let quantity = +input.shift();
    let price = 0;

    if (day === 'monday' || day === 'tuesday' || day === 'wednesday' || day === 'thursday' || day === 'friday') {
        if (product === 'banana') {
            price = 2.50;
        } else if (product === 'apple') {
            price = 1.20;
        } else if (product === 'orange') {
            price = 0.85;
        } else if (product === 'grapefruit') {
            price = 1.45;
        } else if (product === 'kiwi') {
            price = 2.70;
        } else if (product === 'pineapple') {
            price = 5.50;
        } else if (product === 'grapes') {
            price = 3.85;
        }
    } else if (day === 'saturday' || day === 'sunday') {
        if (product === 'banana') {
            price = 2.70;
        } else if (product === 'apple') {
            price = 1.25;
        } else if (product === 'orange') {
            price = 0.90;
        } else if (product === 'grapefruit') {
            price = 1.60;
        } else if (product === 'kiwi') {
            price = 3.00;
        } else if (product === 'pineapple') {
            price = 5.60;
        } else if (product === 'grapes') {
            price = 4.20;
        }
    }

    if (price > 0) {
        console.log(`${(price * quantity).toFixed(2)}`);
    } else {
        console.log('error');
    }
}

fruitShop(['apple', 'Tuesday', 2]);