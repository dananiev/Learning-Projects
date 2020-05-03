function neighborhoods(input) {

    let result = new Map();
    let neighborhoods = input.shift().split(', ');
    
    neighborhoods.forEach(n => result.set(n, []));

    for (let line of input) {
        let [neighborhood, name] = line.split(' - ');

        if (result.has(neighborhood)) {
            let people = result.get(neighborhood);
            people.push(name);

            result.set(neighborhood, people);
        }   
    }

    let output = [...result.entries()];
    
    output.sort((a, b) => b[1].length - a[1].length);

    for (let [hoods, person] of output) {
        console.log(`${hoods}: ${person.length}`);
        for (let human of person) {
            console.log(`--${human}`);
        }
    }
}

neighborhoods(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
]);