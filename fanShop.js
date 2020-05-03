function fanShop(input) {
    let budget = +input.shift();
    let numberOfProducts = +input.shift();
    let sum = 0;

    for (let i = 1; i <= numberOfProducts; i += 1) {
        let product = input.shift();

        switch(product) {
            case 'hoodie':
            sum = sum + 30;
            break;
            case 'keychain':
            sum = sum + 4;
            break;
            case 'T-shirt':
            sum = sum + 20;
            break;
            case 'flag':
            sum = sum + 15;
            break;
            case 'sticker':
            sum = sum + 1;
            break;
        }
    }
    let neededMoney = 0;
    let leftMoney = 0;
    if (budget >= sum) {
        leftMoney = budget - sum;
        console.log(`You bought ${numberOfProducts} items and left with ${leftMoney} lv.`);
    } else {
        neededMoney = sum - budget;
        console.log(`Not enough money, you need ${neededMoney} more lv.`);
    }
}

fanShop([25, 3, 'flag', 'keychain', 'sticker']);