function trainTheTrainers(input) {
    let n = +input.shift();
    let line = input.shift();
    let totalSum = 0;
    let count = 0;

    while (line != 'Finish') {
        let sumOfGrades = 0;
        for (let i = 0; i < n; i += 1) {
            let grade = +input.shift();
            sumOfGrades += grade;
            count += 1;
        }
        totalSum += sumOfGrades;
        let avg = sumOfGrades / n;
        console.log(`${line} - ${avg.toFixed(2)}.`);
        line = input.shift();
    }
    let average = totalSum / count;
    console.log(`Student's final assessment is ${average.toFixed(2)}.`);
}

trainTheTrainers([2, 'While-Loop', 6.00, 5.50, 'For-Loop', 5.84, 5.66, 'Finish']);