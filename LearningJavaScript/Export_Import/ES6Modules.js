export default class User {
    constructor(name, age) {
        this.name = name,
        this.age = age
    }
}

export function printName(User) {
    console.log(`User's name is ${user.name}`);
}

export function printAge(User) {
    console.log(`User is ${user.age} years old`);
}
