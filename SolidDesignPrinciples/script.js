//////////////////////////////////////////////////////////////////////////////// DEPENDENCY INVERSION
/////////////////////////////////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////////////////////////////////
// class Store {
//     constructor(paymentProcessor) {
//         this.paymentProcessor = paymentProcessor
//         // this.paypal = new Paypal() 2
//         // this.user = user 2
//         // this.stripe = new Stripe(user) 1
//     }

//     purchaseBike(quantity) {
//         this.paymentProcessor.pay(200 * quantity)
//         // this.paypal.makePayment(this.user, 200 * quantity); 2
//         // this.stripe.makePayment(200 * quantity * 100); 1
//     }

//     purchaseHelmet(quantity) {
//         this.paymentProcessor.pay(15 * quantity)
//         // this.paypal.makePayment(this.user, 15 * quantity); 2
//         // this.stripe.makePayment(15 * quantity * 100); 1
//     }
// }

// class StripePaymentProcessor {
//     constructor(user) {
//         this.stripe = new Stripe(user)
//     }

//     pay(amountInDollars) {
//         this.stripe.makePayment(amountInDollars * 100);
//     }
// }

// class Stripe {
//     constructor(user) {
//         this.user = user
//     }

//     makePayment(amountInCents) {
//         console.log(`${this.user} made payment of $${amountInCents / 100} with stripe`);
//     }
// }

// class PaypalPaymentProcessor {
//     constructor(user) {
//         this.user = user
//         this.paypal = new Paypal()
//     }

//     pay(amountInDollars) {
//         this.paypal.makePayment(this.user, amountInDollars);
//     }
// }

// class Paypal {
//     makePayment(user, amountInDollars) {
//         console.log(`${user} made payment of $${amountInDollars} with Paypal`);
//     };
// }

// const store = new Store(new PaypalPaymentProcessor('John'));
// store.purchaseBike(2);
// store.purchaseHelmet(2);
//////////////////////////////////////////////////////////////////////////////// LISKOV SUBSTITUTION
////////////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////
// class Shape {
//     area() {
//         //some code...
//     }
// }

// class Rectangle extends Shape {
//     constructor(width, height) {
//         this.width = width
//         this.height = height
//     }
    
//     setWidth(width) {
//         this.width = width
//     }

//     setHeight(height) {
//         this.height = height
//     }

//     area() {
//         return this.width * this.height
//     }
// }

// class Square extends Shape {
//     setWidth(width) {
//         this.width = width
//         this.height = width
//     }

//     setHeight(height) {
//         this.height = height
//         this.width = height
//     }
// }

// function increaseRectangleWidth(rectangle) {
//     rectangle.setWidth(rectangle.width + 1);
// }

// const rectangle1 = new Rectangle(10, 2);
// const square = new Square(5, 5);

// increaseRectangleWidth(rectangle1);
// increaseRectangleWidth(square);

// console.log(rectangle1.area());
// console.log(square.area());
///////////////////////////////////////////////////
///////////////////////////////////////////////////
// class FlyingBird {
//     fly() {
//         console.log('I can fly');
//     }
// }

// class SwimmingBird {
//     swim() {
//         console.log('I can swim');
//     }
// }

// class Duck extends FlyingBird {
//     quack() {
//         console.log('I can quack');
//     }
// }

// class Penguin extends SwimmingBird {
//     dance() {
//         console.log('I can dance');
//     }
// }

// function makeFlyingBirdFly(bird) {
//     bird.fly()
// }

// function makeSwimmingBirdSwim(bird) {
//     bird.swim()
// }

// const duck = new Duck();
// const penguin = new Penguin();

// makeFlyingBirdFly(duck);
// makeSwimmingBirdSwim(penguin);
//////////////////////////////////////////////////////////////////////////////// SINGLE RESPONSIBILITY
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
// import logMessage from './logger.js'

// class CalorieTracker {
//     constructor(maxCalories) {
//         this.maxCalories = maxCalories
//         this.currentCalories = 0
//     }

//     trackCalories(calorieCount) {
//         this.currentCalories += calorieCount;
//         if (this.currentCalories > this.maxCalories) {
//             logMessage('Max calories exceeded dasd');
//         }
//     }
// }

// const calorieTracker = new CalorieTracker(2000);
// calorieTracker.trackCalories(500);
// calorieTracker.trackCalories(1000);
// calorieTracker.trackCalories(700);
//////////////////////////////////////////////////////////////////////////////// INTERFACE SEGREGATION
//////////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////////
// class Entity {
//     constructor(name, attackDamage, health) {
//         this.name = name
//         this.attackDamage = attackDamage
//         this.health = health
//     }

//     move() {
//         console.log(`${this.name} moved`);
//     }

//     attack(targetEntity) {
//         console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`);
//         targetEntity.takeDamage(this.attackDamage);
//     }

//     takeDamage(amount) {
//         this.health -= amount
//         console.log(`${this.name} has ${this.health} health remaining`);
//     }
// }

// class Character extends Entity {

// }

// class Wall extends Entity {
//     constructor(name, health) {
//         super(name, 0, health)
//     }

//     move() {
//         return null
//     }

//     attack() {
//         return null
//     }
// }

// class Turret extends Entity {
//     constructor(name, attackDamage) {
//         super(name, attackDamage, -1)
//     }

//     move() {
//         return null
//     }
//     takeDamage() {
//         return null
//     }
// }

// const turret = new Turret('Turret', 5);
// const character = new Character('Character', 3, 100);
// const wall = new Wall('Wall', 200);

// turret.attack(character);
// character.move();
// character.attack(wall);
///////////////////////////////////////////////////
///////////////////////////////////////////////////
// class Entity {
//     constructor(name) {
//         this.name = name
//     }
// }

// const mover = {
//     move() {
//         console.log(`${this.name} moved`);
//     }
// }

// const attacker = {
//     attack(targetEntity) {
//         console.log(`${this.name} attacked ${targetEntity.name} for ${this.attackDamage} damage`)
//         targetEntity.takeDamage(this.attackDamage);
//     }
// }

// const hasHealth = {
//     takeDamage(amount) {
//         this.health -= amount
//         console.log(`${this.name} has ${this.health} health remaining`);
//     }
// }

// class Character extends Entity {
//     constructor(name, attackDamage, health) {
//         super(name)
//         this.attackDamage = attackDamage
//         this.health = health
//     }
// }

// Object.assign(Character.prototype, mover)
// Object.assign(Character.prototype, attacker)
// Object.assign(Character.prototype, hasHealth)

// class Wall extends Entity {
//     constructor(name, health) {
//         super(name)
//         this.health = health
//     }
// }

// Object.assign(Wall.prototype, hasHealth)

// class Turret extends Entity {
//     constructor(name, attackDamage) {
//         super(name)
//         this.attackDamage = attackDamage
//     }
// }

// Object.assign(Turret.prototype, attacker)

// const turret = new Turret('Turret', 5);
// const character = new Character('Character', 3, 100);
// const wall = new Wall('Wall', 200);

// turret.attack(character);
// character.move();
// character.attack(wall);
//////////////////////////////////////////////////////////////////////////////// OPEN/CLOSED
////////////////////////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////
class BooleanQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log('1. True');
        console.log('2. False');
    }
}

class MultipleChoiceQuestion {
    constructor(description, options) {
        this.description = description
        this.options = options
    }

    printQuestionChoices() {
        this.options.forEach((option, index) => {
            console.log(`${index + 1}. ${option}`);
        });
    }
}

class TextQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log('Answer: ____________');
    }
}

class RangeQuestion {
    constructor(description) {
        this.description = description
    }

    printQuestionChoices() {
        console.log('Minimum: ___________');
        console.log('Maximum: ___________');
    }
}

function printQuiz(questions) {
    questions.forEach(question => {
        console.log(question.description);
        question.printQuestionChoices()
        console.log('');
    });
}

const questions = [
    new BooleanQuestion('This video is useful.'),
    new MultipleChoiceQuestion(
        'What is your favourite language?',
        ['CSS', 'HTML', 'JS', 'Python']
    ),
    new TextQuestion('Describe your favourite JS feature.'),    
    new RangeQuestion('What is the speed limit in your city?')
]

printQuiz(questions);