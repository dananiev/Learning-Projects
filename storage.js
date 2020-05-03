function storage(input) {

    let storage = new Map();

    for (let line of input) {
        let [item, quantityInput] = line.split(' ');
        let quantity = Number(quantityInput);

        if (storage.has(item)) {
            quantity += storage.get(item);
        }

        storage.set(item, quantity);
    }
    storage.forEach((v, k) => console.log(`${k} -> ${v}`));
}

storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);