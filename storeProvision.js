function storeProvision(input) {

    let currentStock = input[0];
    let orderdStock = input[1];

    let result = {};

    for (let i = 0; i < currentStock.length; i += 1) {
        if (i % 2 === 0) {
            result[currentStock[i]] = +currentStock[i + 1];
        }
    }

    for (let i = 0; i < orderdStock.length; i += 1) {
        if (i % 2 === 0) {
            if (result.hasOwnProperty(orderdStock[i])) {
                let key = orderdStock[i];
                let value = +orderdStock[i + 1];
                result[key] += value;
            } else {
                result[orderdStock[i]] = +orderdStock[i + 1];
            }
        }
    }
    console.log(result);

}

storeProvision([
    ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
    ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
]);