const dogBreeds = [
    'Labrador',
    'Bulldog',
    'Pitbull',
    'Beagle',
    'Chihuahua'
]

const dogSearch = (searchTerm, dogsDB) => {
    // if (!searchTerm) {
    //     return [];
    // }

    if (searchTerm === 'asd') {
        return 5;
    }

    const filteredData = dogsDB.filter(breed => {
        return breed.toLowerCase().includes(searchTerm.toLowerCase())
    })

    return filteredData;
}

module.exports = dogSearch;