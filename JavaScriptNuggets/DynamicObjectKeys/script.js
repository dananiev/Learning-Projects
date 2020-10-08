// dot notation
const person = {
    name: 'john'
}

console.log(person.name);
person.age = 25;
console.log(person);



// square bracket notation
const items = {
    position: ['developer', 'designer', 'data scientist']
}
console.log(items['position']);
console.log(person['name']);


let appState = 'loading';
appState = 'error';

const keyName = 'computer';

const app = {
    [appState]: true
}

app[keyName] = 'apple'
console.log(app);


const state = {
    loading: true,
    name: '',
    job: ''
}
function updateState(key, value) {
    state[key] = value
}

updateState('job', 'developer');
updateState('name', 'Samantha');
updateState('age', 34);
console.log(state);