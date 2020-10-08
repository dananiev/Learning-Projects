// allows and iterable to spread/expand individually inside reciever
// split into single items and COPY them

const udemy = 'udemy';
const letters = [...udemy];
console.log(letters)

const boys = ['david', 'josh', 'michael'];
const girls = ['anna', 'suzanna'];
const bestFriend = 'arnold';
// const friends = [boys, girls, bestFriend];
// console.log(friends);
const people = [...boys, ...girls, bestFriend];
console.log(people);

// reference
const newFriends = people;
newFriends[0] = 'nancy';
console.log(people);
console.log(newFriends);

// copy
const copyNewFriends = [...people];
copyNewFriends[0] = 'betty';
console.log(people);
console.log(copyNewFriends);

// ES2018 - ES8 Objects
const person = { name: 'john', job: 'developer' };
const newPerson = {...person, city: 'denver', name: 'peter'};
console.log(person);
console.log(newPerson);