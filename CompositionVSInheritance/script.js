//////////////////////////////////////////////////////////////////////////////////////INHERITANCE
/////////////////////////////////////////////////////////////////////////////////////////////////
// class Monster {
//     constructor(name) {
//         this.name = name
//     }

//     attack() {
//         console.log(`${this.name} attacked`);
//     }

//     walk() {
//         console.log(`${this.name} walked`);
//     }
// }

// class FlyingMonster extends Monster {
//     fly() {
//         console.log(`${this.name} flew`);
//     }
// }

// class SwimmingMonster extends Monster {
//     swim() {
//         console.log(`${this.name} swam`);
//     }
// }

// const bear = new Monster('bear');
// bear.walk()
// bear.attack()

// const eagle = new FlyingMonster('eagle');
// eagle.walk()
// eagle.attack()
// eagle.fly()

// const shark = new SwimmingMonster('shark');
// shark.walk()
// shark.attack() 
// shark.swim()


///////////////////////////////////////////////////////////////////////////////OBJECT COMPOSITION
/////////////////////////////////////////////////////////////////////////////////////////////////

function throwPoison({ name }) {
    return {
        throw: () => console.log(`${name} threw`)
    }
}

function attackerAndWalker({ name }) {
    return {
        attack: () => console.log(`${name} attacked`),
        walk: () => console.log(`${name} walked`)
    }
}

function swimmer({ name }) {
    return {
        swim: () => console.log(`${name} swam`)
    }
}

function flyer({ name }) {
    return {
        fly: () => console.log(`${name} flew`)
    }
}

function swimmingMonsterCreator(name) {
    const monster = { name: name }

    return {
        ...monster,
        ...swimmer(monster),
        ...attackerAndWalker(monster),
        ...throwPoison(monster)
    }
}

function flyingSwimmingMonsterCreator(name) {
    const monster = { name: name }

    return {
        ...monster,
        ...swimmer(monster),
        ...flyer(monster),
        ...attackerAndWalker(monster),
        ...throwPoison(monster)
    }
}

const obj = flyingSwimmingMonsterCreator('Monster');
obj.swim()
obj.fly()
obj.walk()
obj.attack()
obj.throw()