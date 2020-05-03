function groupStage(input) {
    let team = input.shift();
    let matchesPlayed = +input.shift();

    let points = 0;
    let totalVkarani = 0;
    let totalPolucheni = 0;

    while (matchesPlayed > 0) {
        let vkarani = +input.shift();
        let polucheni = +input.shift();
        totalPolucheni += polucheni;
        totalVkarani += vkarani;
        if (vkarani > polucheni) {
            points += 3;
        } else if (vkarani === polucheni) {
            points += 1;
        } 

        matchesPlayed -= 1;
    }

    if (totalVkarani >= totalPolucheni) {
        console.log(`${team} has finished the group phase with ${points} points.`);
        console.log(`Goal difference: ${totalVkarani - totalPolucheni}.`);
    } else {
        console.log(`${team} has been eliminated from the group phase.`);
        console.log(`Goal difference: ${totalVkarani - totalPolucheni}.`);
    }
}

groupStage(['Brazil', 3, 4, 2, 0, 0, 1, 1]);