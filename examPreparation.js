function examPreparation(input) {
    let unsatisfactoryGrades = +input.shift();
    let command = input.shift();

    let currentNumberUnsatisfactoryAssessments = 0;
    let numberOfProblems = 0;
    let lastProblem = '';
    let sum = 0;

    let isEnough = true;

    while (command !== 'Enough') {
        numberOfProblems += 1;
        let nameTask = command;
        lastProblem = nameTask;

        let grade = +input.shift();
        sum += grade;
        if (grade <= 4) {
            currentNumberUnsatisfactoryAssessments += 1;
        }
        if (currentNumberUnsatisfactoryAssessments === unsatisfactoryGrades) {
            isEnough = false;
            break;
        }
        command = input.shift();
    }
    if (isEnough) {
        console.log(`Average score: ${(sum / numberOfProblems).toFixed(2)}`);
        console.log(`Number of problems: ${numberOfProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    } else {
        console.log(`You need a break, ${unsatisfactoryGrades} poor grades.`);
    }
}

examPreparation([3, 'Money', 6, 'Story', 4, 'Spring Time', 5, 'Bus', 6, 'Enough']);