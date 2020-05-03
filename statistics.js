function statistics(input) {
    let minutes = +input.shift();
    let player = input.shift();

    let evenMinutes = minutes % 2 === 0;
    let oddMinutes = minutes % 2 !== 0;

    if (minutes === 0) {
        console.log('Match has just began!');
    } else if (minutes > 0 && minutes < 45) {
        console.log('First half time.');
    } else if (minutes >= 45) {
        console.log('Second half time.');
    }

    if (minutes > 0 && minutes <= 10) {
        console.log(`${player} missed a penalty.`);
    }
    if (evenMinutes && minutes > 0 && minutes <= 10) {
        console.log(`${player} was injured after the penalty.`);
    } else if (minutes > 10 && minutes <= 35) {
        console.log(`${player} received yellow card.`);
    }
    if (oddMinutes && minutes > 10 && minutes <= 35) {
        console.log(`${player} got another yellow card.`);
    } else if (minutes > 35 && minutes < 45) {
        console.log(`${player} SCORED GOAL !!!`);
    } else if (minutes > 45 && minutes <= 55) {
        console.log(`${player} got a freekick.`);
    }
    if (evenMinutes && minutes > 45 && minutes <= 55) {
        console.log(`${player} missed the freekick.`);
    } else if (minutes > 55 && minutes <= 80) {
        console.log(`${player} missed a shot from corner.`);
    } 
    if (oddMinutes && minutes > 55 && minutes <= 80) {
        console.log(`${player} has been changed with another player.`);
    } else if (minutes > 80 && minutes <= 90) {
        console.log(`${player} SCORED A GOAL FROM PENALTY !!!`);
    }
}

statistics([85, 'Harry', 'Kane']);