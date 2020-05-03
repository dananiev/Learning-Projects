function smallShop(input) {
    let productName = input.shift();
    let city = input.shift();
    let quantity = +input.shift();
    let price = 0;

    if (city === 'Sofia') {
        if (productName === 'coffee') {
            price = quantity * 0.50;
            console.log(price);
        } else if (productName === 'water') {
            price = quantity * 0.80;
            console.log(price);
        } else if (productName === 'beer') {
            price = quantity * 1.20;
            console.log(price);
        } else if (productName === 'sweets') {
            price = quantity * 1.45;
            console.log(price);
        } else if (productName === 'peanuts') {
            price = quantity * 1.60;
            console.log(price);
        }
    } else if (city === 'Plovdiv') {
        if (productName === 'coffee') {
            price = quantity * 0.40;
            console.log(price);
        } else if (productName === 'water') {
            price = quantity * 0.70;
            console.log(price);
        } else if (productName === 'beer') {
            price = quantity * 1.15;
            console.log(price);
        } else if (productName === 'sweets') {
            price = quantity * 1.30;
            console.log(price);
        } else if (productName === 'peanuts') {
            price = quantity * 1.50;
            console.log(price);
        }
    } else if (city === 'Varna') {
        if (productName === 'coffee') {
            price = quantity * 0.45;
            console.log(price);
        } else if (productName === 'water') {
            price = quantity * 0.70;
            console.log(price);
        } else if (productName === 'beer') {
            price = quantity * 1.10;
            console.log(price);
        } else if (productName === 'sweets') {
            price = quantity * 1.35;
            console.log(price);
        } else if (productName === 'peanuts') {
            price = quantity * 1.55;
            console.log(price);
        }
    }   
}

smallShop(['coffee', 'Varna', 2]);