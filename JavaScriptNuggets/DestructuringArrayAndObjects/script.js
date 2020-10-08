// faster and easier way to access, unpack variables from arrays and objects

// const fruits = ['orange', 'banana', 'apple'];
// const [fruitOne, , fruitThree] = fruits;
// console.log(fruitOne, fruitThree);



// let first = 'one';
// let second = 'two';
// let temp = second;
// second = first;
// first = temp;

// let arr = ['three', 'four'];
// let [fourth, third] = arr;
// console.log(fourth);




const bob = {
    first: 'michael',
    last: 'sanders',
    city: 'chicago',
    siblings: {
        sister: 'jane'
    }
}

const last = 'some value';
const { last: bobLastValue, first, city, zip, siblings:{sister:siblingsSisterValue} } = bob;
console.log(first, city, zip, bobLastValue, siblingsSisterValue);
// const firstName = bob.first;
// const lastName = bob.last
// const sister = bob.siblings.sister;
// console.log(firstName, lastName, sister);


function printPerson({ first, last, city, siblings:{sister}}) {
    console.log(first, last, city, sister);
}

printPerson(bob);