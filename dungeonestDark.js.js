function dungeonestDark(input) {

    let initialHealth = 100;
    let initialCoins = 0;
    let roomCounter = 0;

    let room = input[0].split('|');

    for (let singleRoom of room) {
        roomCounter += 1;
        let currentRoom = singleRoom.split(' ');
        let command = currentRoom[0];
        let number = +currentRoom[1];

        if (command === 'potion') {
            let currentHealth = initialHealth;
            initialHealth += number;

            if (initialHealth > 100) {
                console.log(`You healed for ${100 - currentHealth} hp.`);
                console.log('Current health: 100 hp.');
                initialHealth = 100;
            } else {
                console.log(`You healed for ${number} hp.`);
                console.log(`Current health: ${initialHealth} hp.`); 
            }
        } else if (command === 'chest') {
            initialCoins += number;
            console.log(`You found ${number} coins.`);
        } else {
            let monster = command;
            initialHealth -= number;
            if (initialHealth > 0) {
                console.log(`You slayed ${monster}.`);
            } else {
                console.log(`You died! Killed by ${monster}.`);
                console.log(`Best room: ${roomCounter}`);
                return;
            }
        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${initialCoins}`);
    console.log(`Health: ${initialHealth}`);
}

dungeonestDark(['rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chess 1000']);