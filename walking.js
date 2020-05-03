function walking(input) {
    let steps = 0;
    let diff = 0;

    while (steps < 10000) {
        let command = input.shift();

        if (command === 'Going home') {
            steps += +input.shift();

            if (steps >= 10000) {
                console.log('Goal reached! Good job!');
                break;
            } else {
                diff = 10000 - steps;
                console.log(`${diff} more steps to reach goal.`);
                break;
            }
        } else {
            steps += Number(command);
            if (steps >= 10000) {
                console.log('Goal reached! Good job!');
            }
        }
    }
}

walking([1500, 300, 2500, 3000, 'Going home', 200]);