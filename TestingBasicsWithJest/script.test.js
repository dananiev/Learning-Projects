const dogSearch = require('./script');

const mockDB = [
    'Labrador',
    'Bulldog',
    'Pitbull',
    'Beagle',
    'Chihuahua'
]

describe('Dog search', () => {
    it('is searching dogs', () => {
        expect(dogSearch('chi', mockDB)).toEqual(['Chihuahua']);
    })

    it('is searching dogs', () => {
        expect(dogSearch('lab', mockDB)).toEqual(['Labrador']);
    })

    // it('returns an empty array with undefined or null input', () => {
    //     expect(dogSearch(null, mockDB)).toEqual([]);
    // })

    it('return a number', () => {
        expect(dogSearch('asd', mockDB)).toEqual(5);
    })
})