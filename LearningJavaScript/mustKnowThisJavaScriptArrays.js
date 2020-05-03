const items = [
    { name: 'Bike', price: 100 },
    { name: 'TV',   price: 200},
    { name: 'Album',   price: 10},
    { name: 'Book',   price: 5},
    { name: 'Phone',   price: 500},
    { name: 'Computer',   price: 1000},
    { name: 'Keyboard',   price: 25}
]

const filteredItems = items.filter((item) => {
    return item.price <= 100;
})
//console.log(filteredItems);

const itemNames = items.map((item) => {
    return item.name;
})
//console.log(itemNames);

const findItem = items.find((item) => {
    return item.name === 'Book';
})
//console.log(findItem);

items.forEach((item) => {
    //console.log(item.name);
})

const hasInexpensiveItems = items.some((item) => {
    return item.price < 100;
})
//console.log(hasInexpensiveItems);
const DoNotHaveSuchAnItem = items.some((item) => {
    return item.price < 0;
})
//console.log(DoNotHaveSuchAnItem);


const total = items.reduce((currentTotal, item) => {
    return item.price + currentTotal;
}, 0)
//console.log(total);

const numbers = [1, 2, 3, 4, 5];
const includesOne = numbers.includes(1);
//console.log(includesOne);
const includesNine = numbers.includes(9);
console.log(includesNine);