function five(input) {
    let visitorsCount = +input.shift();
    let back = 0;
    let chest = 0;
    let legs = 0;
    let abs = 0;

    let shake = 0;
    let bar = 0;

    let activityCount = 0;
    let proteinCount = 0;

    for (let i = 0; i < visitorsCount; i += 1) {
        let data = input.shift();

        if (data === 'Back') {
            back += 1;
            activityCount += 1;
        } else if (data === 'Chest') {
            chest += 1;
            activityCount += 1;
        } else if (data === 'Legs') {
            legs += 1;
            activityCount += 1;
        } else if (data === 'Abs') {
            abs += 1;
            activityCount += 1;
        } else if (data === 'Protein shake') {
            shake += 1;
            proteinCount += 1; 
        } else if (data === 'Protein bar') {
            bar += 1;
            proteinCount += 1;
        }
    }

    let sum1 = 100 * (activityCount / visitorsCount);
    let sum2 = 100 * (proteinCount / visitorsCount);

    console.log(`${back} - back`);
    console.log(`${chest} - chest`);
    console.log(`${legs} - legs`);
    console.log(`${abs} - abs`);
    console.log(`${shake} - protein shake`);
    console.log(`${bar} - protein bar`);
    console.log(`${sum1.toFixed(2)}% - work out`);
    console.log(`${sum2.toFixed(2)}% - protein`);
}

five([10,
    'Back',
    'Chest',
    'Legs',
    'Abs',
    'Protein shake',
    'Protein bar',
    'Protein shake',
    'Protein bar',
    'Legs',
    'Abs'
    ]);