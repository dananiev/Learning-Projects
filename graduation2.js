function graduation2(input) {
    let name = input.shift();
    let excluded = 0;
    let isExcluded = false;
    let counter = 1;
    let sum = 0;

    while (counter <= 12) {
        let grade = +input.shift();
        if (grade < 4) {
            excluded += 1;
        }

        if (grade >= 4) {
            sum += grade;
            counter += 1;
        }
        if (excluded >= 2) {
            isExcluded = true;
            break;
        }
    }

    if (isExcluded === false) {
        let average = sum / 12;
        console.log(`${name} graduated. Average grade: ${average.toFixed(2)}`);
    } else {
        console.log(`${name} has been excluded at ${counter} grade`);
    }
}

graduation2(['Gosho', 5, 5.5, 6, 5.43, 5.5, 6, 5.5, 5, 6, 6, 5.43, 5]);