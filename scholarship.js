function scholarship(input) {
    let leva = +input.shift();
    let averageGrade = +input.shift();
    let minumSalary = +input.shift();

    if (averageGrade <= 4.50) {
        console.log('You cannot get a scholarship!');
    } else if ((averageGrade > 4.50) && (averageGrade < 5.50)) {
        if (leva > minumSalary) {
            console.log('You cannot get a scholarship!');
        } else {
            let sum = 0;

            sum = Math.floor(0.35 * minumSalary);
            console.log(`You get a Social scholarship ${sum} BGN`);
        }
    }

    if (averageGrade >= 5.50) {
        if (leva < minumSalary) {
            let excellentScholarship1 = 0;
            let excellentScholarship2 = 0;

            excellentScholarship1 = Math.floor(averageGrade * 25);
            excellentScholarship2 = Math.floor(0.35 * minumSalary);

            let scholarship = Math.max(excellentScholarship1, excellentScholarship2);

            if (excellentScholarship1 === scholarship) {
                console.log(`You get a scholarship for excellent results ${scholarship} BGN`);
            } else if (excellentScholarship2 === scholarship) {
                console.log(`You get a Social scholarship ${scholarship} BGN`);
            } else {
                scholarship = Math.floor(averageGrade * 25);
                console.log(`You get a scholarship for excellent results ${scholarship} BGN`);
            }
        }
    }
}

scholarship([300.00, 5.65, 420.00]);