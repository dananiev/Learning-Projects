// class Rectangle {
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

// class Square extends Rectangle {
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

// const rectangleOne = new Rectangle(10, 2);
// const square = new Square(5, 5);

// increaseRectangleWidth(rectangleOne);
// increaseRectangleWidth(square);

// console.log(rectangleOne.area());
// console.log(square.area());

class FlyingBird {
    fly() {
        console.log('I can fly');
    }
}

class SwimmingBird {
    swim() {
        console.log('I can swim');
    }
}

class Duck extends FlyingBird {
    quack() {
        console.log('I can quack');
    }
}

class Penguin extends SwimmingBird {
}

function makeFlyingBirdFly(bird) {
    bird.fly()
}

function makeSwimmingBirdSwim(bird) {
    bird.swim()
}

const duck = new Duck();
const penguin = new Penguin();

makeFlyingBirdFly(duck);
makeSwimmingBirdSwim(penguin);
