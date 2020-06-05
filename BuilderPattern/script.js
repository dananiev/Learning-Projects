// class Address {
//     constructor(zip, street) {
//         this.zip = zip
//         this.street = street
//     }
// }

// class User {
//     constructor(name, age, phone, address) {
//         this.name = name
//         this.age = age
//         this.phone = phone
//         this.address = address
//     }
// }

// const user = new User('Bob', undefined, undefined, new Address('1', 'Main'));
// console.log(user);

//////////////////////////////////////////////////////////////////////////////////// BUILDER PATTERN
// class Address {
//     constructor(zip, street) {
//         this.zip = zip
//         this.street = street
//     }
// }

// class User {
//     constructor(name) {
//         this.name = name
//     }
// }

// class UserBuilder {
//     constructor(name) {
//         this.user = new User(name);
//     }

//     setAge(age) {
//         this.user.age = age
//         return this
//     }

//     setPhone(phone) {
//         this.user.phone = phone
//         return this
//     }

//     setAddress(address) {
//         this.user.address = address
//         return this
//     }

//     build() {
//         return this.user
//     }
// }

// let user = new UserBuilder('John Doe').setAge(34).setPhone('+359-888-777-666').setAddress('1', 'main').build();
// console.log(user);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////
class Address {
    constructor(zip, street) {
        this.zip = zip
        this.street = street
    }
}

class User {
    constructor(name, { age, phone, address, nationality, family = 'yes' } = {}) {
        this.name = name
        this.age = age
        this.phone = phone
        this.address = address
        this.nationality = nationality
        this.family = family
    }
}

let user = new User('Simon', { age: 32, phone: '333-333', address: new Address('1', 'main')});
console.log(user);