function second(input) {
    let first = input.shift();
    let second = input.shift();
    let third = input.shift();

    let won = 0;
    let lost = 0;
    let draw = 0;

    let numbersFirst = first.split(':').map(Number);
    let numbersSecond = second.split(':').map(Number);
    let numbersThird = third.split(':').map(Number);
    
    if (numbersFirst[0] > numbersFirst[1]) {
        won += 1;
    } else if (numbersFirst[0] < numbersFirst[1]) {
        lost += 1;
    } else {
        draw += 1;
    }

    if (numbersSecond[0] > numbersSecond[1]) {
        won += 1;
    } else if (numbersSecond[0] < numbersSecond[1]) {
        lost += 1;
    } else {
        draw += 1;
    }

    if (numbersThird[0] > numbersThird[1]) {
        won += 1;
    } else if (numbersThird[0] < numbersThird[1]) {
        lost += 1;
    } else {
        draw += 1;
    }

    console.log(`Team won ${won} games.`);
    console.log(`Team lost ${lost} games.`);
    console.log(`Drawn games: ${draw}`);
}

second(['3:1',
    '0:2',
    '0:0']);