function bestPlayer(input) {
    let player = input.shift();
    let bestPlayer = '';
    let bestGoals = 0;
    let madeHatTrick = false;


    while (player !== 'END') {
        let goals = +input.shift();
        if (goals > bestGoals) {
            bestGoals = goals;
            bestPlayer = player;
        }
        if (bestGoals >= 3) {
            madeHatTrick = true;
        }
        if (bestGoals >= 10) {
            break;
        }
        player = input.shift();
    }
    
    console.log(`${bestPlayer} is the best player!`);

    if (madeHatTrick) {
        console.log(`He has scored ${bestGoals} goals and made a hat-trick !!!`);
    } else {
        console.log(`He has scored ${bestGoals} goals.`);
    }
}

bestPlayer(['Neymar', 2, 'Ronaldo', 1, 'Messi', 3, 'END']);