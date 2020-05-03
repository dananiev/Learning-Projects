// function Dog(name, energy, breed) {
//     let dog = {
//         name,
//         energy,
//         breed
//     }
    
//     return Object.assign(
//         dog,
//         eater(dog),
//         sleeper(dog),
//         player(dog),
//         barker(dog)
//     )
// }

// const leo = Dog('Leo', 10, 'GoldenDoodle');


const circle = {
    radius: 1,
    location: 'Europe',

    draw: function() {
        console.log('bau');
    }
}

console.log(circle.draw());
