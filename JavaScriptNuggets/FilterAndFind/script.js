// Filter returns new array, can manipulate the size of new array (unlike map), returns based on condition
// Find - returns single instance, returns first match, if no match - undefined


const people = [
    { name: 'bob', age: 20, position: 'developer'},
    { name: 'michael', age: 23, position: 'designer'},
    { name: 'robert', age: 26, position: 'data scientist'},
    { name: 'george', age: 19, position: 'intern'},
]


// filter
const youngPeople = people.filter((person) => {
    return person.age < 25;
})
console.log(youngPeople);
const developers = people.filter((person) => person.position === 'developer');
console.log(developers);


// no match
const seniorDevs = people.filter((item) => item.position === 'senior developer');
console.log(seniorDevs);


// find 
const michael = people.find((boy) => boy.name === 'michael');
console.log(michael);


// no match
const oldPerson = people.find((human) => human.age > 30);
console.log(oldPerson);


// multiple matches - first match
const randomPerson = people.find((person) => person.age < 30);
console.log(randomPerson);

const george = people.filter((person) => person.name === 'george');
console.log(george);
console.log(george[0].position);