const personOne = {
    name: 'Kyle',
    age: 24,
    address: {
        city: 'Somewhere',
        state: 'One of them'
    },
    colorSkin: 'white'
}

const {name: firstName = 'John', age, favouriteFood = 'pizza'} = personOne;
console.log(firstName);
console.log(age);
console.log(favouriteFood);


const personTwo = {
    name: 'Sally',
    age: 32,
    address: {
        city: 'Somewhere else',
        state: 'Another One of them'
    },
    favouriteFood: 'spaghetti'
}

const {name, address} = personTwo;

console.log(name);
console.log(address);

const animal = {
    type: 'lion',
    size: 'big',
    color: {
        body: 'yellow-orange',
        head: 'brown'
    }
}

const {type, ...rest} = animal;
console.log(type);
console.log(rest);


function printAnimal({type, size, favouriteFood = 'rice'}) {
    console.log(`Type is ${type}, size is ${size}, food is ${favouriteFood}`);
}
printAnimal(animal);