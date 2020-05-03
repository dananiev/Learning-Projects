function listOfProducts(input) {

    let sorted = input.sort();
    let result = '';

    for (let i = 0; i < sorted.length; i += 1) {
        result = sorted[i];
        console.log(`${i + 1}.${result}`);
    }

}   

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);