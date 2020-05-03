function solve(input) {

    let days = Number(input.shift());
    let plunderForADay = Number(input.shift());
    let expectedPlunder = Number(input.shift());

    let totalPlunder = 0;
    let percentage = 0;
    let fiftyPercentOfDailyPlunder = plunderForADay / 2;
    let per = 0;

    for (let day = 1; day <= days; day += 1) {

        totalPlunder += plunderForADay;

    if (day % 3 === 0) {
        totalPlunder += fiftyPercentOfDailyPlunder;
    }

    if (day % 5 === 0) {
        per = 0.30 * totalPlunder;
        totalPlunder -= per;
    }

    }

    if (totalPlunder >= expectedPlunder) {
       console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
    } else if (totalPlunder < expectedPlunder) {
        percentage = totalPlunder / expectedPlunder * 100;
        console.log(`Collected only ${percentage.toFixed(2)}% of the plunder.`);
    }
}

solve([ '10', '20', '380' ]);