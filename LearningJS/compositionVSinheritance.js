function swimmer({
    name
}) {
    return {
        swim: () => console.log(`${name} swam`),
        fly: () => console.log(`${name} flew`)
    }
}

function flyer({
    name
}) {
    return {
        flyAgain: () => console.log(`${name} flew`)
    }
}

function attacker({
    name
}) {
    return {
        attack: () => console.log(`${name} attacked`)
    }
}

function flyingSwimmingMonsterCreator(name) {
    const monster = {
        name: name
    };

    return {
        ...monster,
        ...swimmer(monster),
        ...flyer(monster),
        ...attacker(monster)
    }
}

const obj = flyingSwimmingMonsterCreator('Monster');
obj.swim();
obj.fly();
obj.attack();