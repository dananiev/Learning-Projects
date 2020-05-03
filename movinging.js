function movinging(input) {
    let width = +input.shift();
    let length = +input.shift();
    let height = +input.shift();

    let freeSpace = width * length * height;
    let totalSpace = 0;
    let spaceDiff = 0;

    let command = input.shift();
    while (command !== 'Done') {
        let cartoonSpace = +command;
        totalSpace += cartoonSpace;
        spaceDiff = Math.abs(totalSpace - freeSpace);
        if (totalSpace >= freeSpace) {
            console.log(`No more free space! You need ${spaceDiff} Cubic meters more.`);
            break;
        }
        command = input.shift();
    }
    if (command === 'Done') {
        console.log(`${spaceDiff} Cubic meters left.`);
    }
}

movinging([10, 10, 2, 20, 20, 20, 20, 122]);