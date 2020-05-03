function solve(city, area, population, country, postCode) {

    let bigCity = {
        name: city,
        area: area,
        population: population,
        country: country,
        postCode: postCode
    }

    let entries = Object.entries(bigCity);

    for (let pair of entries) {
        console.log(`${pair[0]} -> ${pair[1]}`);
    }

}

solve('Sofia', '492', '1238438', 'Bulgaria', '1000');