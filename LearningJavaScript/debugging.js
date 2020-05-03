// const users = [
//     { name: 'Qni', age: 30 },
//     { name: 'Nikola', age: 25 },
//     { name: 'Adi', age: 31 },
//     { name: 'Bibi' },
//     { name: 'Viki', age: 34 },
//     { name: 'Rali', age: 27 }
// ]

// users.forEach(user => {
//     printUser(user);
// })

// function printUser(user) {
//     if (user.age != null) {
//         console.log(`User ${user.name} will be ${user.age + 5} years old in five years.`);
//     } else {
//         console.log(`User is called ${user.name}`);
//     }
// }

const button = document.getElementById('btn');
const input = document.getElementById('textElement');

button.addEventListener('click', () => {
    console.log(input.value);
})